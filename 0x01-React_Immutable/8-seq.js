import { Seq } from 'immutable';

// Calling the function should filter any student with a score < 70 and print to the console the first name and the last name with the first letter capitalized:
export const printBestStudents = (grades) => {
    const bestStudents = Seq(grades)
        .filter((grade) => grade.score >= 70)
        .map((grade) => {
            return {
                score: grade.score,
                firstName: grade.firstName.charAt(0).toUpperCase() + grade.firstName.slice(1),
                lastName: grade.lastName.charAt(0).toUpperCase() + grade.lastName.slice(1),
            };
        });
    console.log(bestStudents.toJS());
};

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