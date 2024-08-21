const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
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
    console.log(`Number of students: ${infos.total}`);
    for (const stClass in infos) {
      if (stClass !== 'total') {
        console.log(`Number of students in ${stClass}: ${infos[stClass].length}. List: ${infos[stClass]}`);
      }
    }
  } catch (err) {
    console.log(err);
  // throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
