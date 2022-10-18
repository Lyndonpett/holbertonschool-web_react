import { Seq } from 'immutable';

export default function printBestStudents(grade) {
  const students = {};
  for (const student in grade) {
    if (grade[student].score >= 70) {
      students[student] = {
        firstName:
          grade[student].firstName.charAt(0).toUpperCase()
		  +
          grade[student].firstName.slice(1),
        lastName:
          grade[student].lastName.charAt(0).toUpperCase()
		  +
          grade[student].lastName.slice(1),
        score: grade[student].score,
      };
    }
  }
  console.log(Seq(students).toJS());
}

// const grades = {
//     1: {
//         score: 99,
//         firstName: 'guillaume',
//         lastName: 'salva',
//     },
//     2: {
//         score: 69,
//         firstName: 'suillaume',
//         lastName: 'galva',
//     },
// };

// printBestStudents(grades);
