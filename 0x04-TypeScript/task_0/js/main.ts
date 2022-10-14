interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Fart',
  lastName: 'Face',
  age: 69,
  location: 'UrMoms'
};

const student2: Student = {
  firstName: 'Smelly',
  lastName: 'Butt',
  age: 35,
  location: 'Somewhere'
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

studentsList.forEach(function (student) {
  const row = table.insertRow();
  const firstName = row.insertCell();
  const location = row.insertCell();

  firstName.innerHTML = student.firstName;
  location.innerHTML = student.location;
});

document.body.appendChild(table);
