const http = require('http');
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const dataTab = data.split('\n');
    const infos = { total: 0 };

    for (let i = 1; i < dataTab.length; i += 1) {
      const student = dataTab[i];
      if (student !== '') {
        const stData = student.split(',');
        infos.total += 1;
        const curClass = stData[3];
        if (!(curClass in infos)) {
          infos[curClass] = [stData[0]];
        } else {
          infos[curClass].push(stData[0]);
        }
      }
    }
    let res = `Number of students: ${infos.total}\n`;
    for (const stClass in infos) {
      if (stClass !== 'total') {
        res += `Number of students in ${stClass}: ${infos[stClass].length}. List: ${infos[stClass].join(', ')}\n`;
      }
    }
    return res;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    let data = '';
    countStudents(process.argv[2]).then((infos) => {
      data += 'This is the list of our students\n';
      data += infos;
      data = data.slice(0, -1);
      res.statusCode = 200;
      res.end(data);
    }).catch(() => {
      res.statusCode = 404;
      res.end('');
    });
  }
});

app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
