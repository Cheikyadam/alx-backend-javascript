import { promises as fs } from 'fs';

async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const infos = {};
        const dataTab = data.split('\n');

        for (let i = 1; i < dataTab.length; i += 1) {
          const student = dataTab[i];
          if (student !== '') {
            const stData = student.split(',');
            const curClass = stData[3];
            if (!(curClass in infos)) {
              infos[curClass] = [stData[0]];
            } else {
              infos[curClass].push(stData[0]);
            }
          }
        }
        resolve(infos);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
