const http = require('http');
const fs = require('fs').promises;

async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8').then((data) => {
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
      resolve(res);
    })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
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
    }).catch((error) => {
      res.statusCode = 500;
      res.end(error.message);
    });
  }
});

app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
