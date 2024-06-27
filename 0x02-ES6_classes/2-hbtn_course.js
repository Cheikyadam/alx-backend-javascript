export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a sring');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (students.isArray === false) {
      throw new TypeError('Students must ne an array of string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  set length(length) {
    this._length = length;
  }

  set name(name) {
    this._name = name;
  }

  set students(students) {
    this._students = students;
  }
}
