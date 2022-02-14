interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => `${firstName.substring(0, 1)}. ${lastName}`;

interface StudentInterface {
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  displayName: string;
  workOnHomework: () => string;
}

class StudentClass implements StudentConstructor {
  displayName: string;

  constructor(args: StudentInterface) {
    this.displayName = args.firstName;
  }

  workOnHomework() {
    return 'Currently working';
  }
}
