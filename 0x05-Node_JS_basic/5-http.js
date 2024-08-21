const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const { url } = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    let data = 'This is the list of our students\n';
    data += await countStudents(process.argv[2]);
    res.end(data);
  } else { res.end('Hello Holberton School!'); }
});

app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
