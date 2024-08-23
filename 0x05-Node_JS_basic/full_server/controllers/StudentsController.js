import readDatabase from '../utils';

function sort(list) {
  return list.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const infos = await readDatabase(process.argv[2]);
      let res = 'This is the list of our students\n';
      /* eslint-disable guard-for-in */
      for (const stClass in infos) {
        res += `Number of students in ${stClass}: ${infos[stClass].length}. List: ${sort(infos[stClass]).join(', ')}\n`;
      }
      res = res.slice(0, -1);
      response.statusCode = 200;
      response.send(res);
    } catch (error) {
      response.status(500);
      response.send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'SWE' && major !== 'CS') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
      // response.status(500).json({ error: 'Major parameter must be CS or SWE' });
    } else {
      try {
        const infos = await readDatabase(process.argv[2]);
        const res = `List: ${infos[major].join(', ')}`;
        response.statusCode = 200;
        response.send(res);
      } catch (error) {
        response.status(500);
        response.send(error.message);
        // response.status(500).json({ error: error.message });
      }
    }
  }
}
