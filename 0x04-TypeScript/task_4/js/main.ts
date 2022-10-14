/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

export const cpp = new Subjects.Cpp();

export const java = new Subjects.Java();

export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Garglon',
  lastName: 'Bofa',
  experienceTeachingC: 10
};

cpp.teacher = cTeacher;
console.log('C++');
console.log('\tgetRequirements: ', cpp.getRequirements());
console.log('\tgetAvailableTeacher: ', cpp.getAvailableTeacher());
java.teacher = cTeacher;
console.log('Java');
console.log('\tgetRequirements: ', cpp.getRequirements());
console.log('\tgetAvailableTeacher: ', cpp.getAvailableTeacher());
react.teacher = cTeacher;
console.log('React');
console.log('\tgetRequirements: ', cpp.getRequirements());
console.log('\tgetAvailableTeacher: ', cpp.getAvailableTeacher());
