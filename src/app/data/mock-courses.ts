import { Course } from "../models/Course";

export const COURSES: Course[] = [
    { subject: {id: 1, name: 'Mathematics', abbre: 'MATH', isMandatory: true},
      teacher: { name: 'Caius', surrname: 'Mackenzie', coursesTaught: []},
      duration: '8:00 - 8:45'
    },

    { subject: { id: 2, name: 'English', abbre: 'ENG', isMandatory: true },
      teacher: { name: 'Caspar', surrname: 'Davis', coursesTaught: []},
      duration: '8:55 - 9:40'
    },

    { subject: { id: 3, name: 'Physics', abbre: 'PHYS', isMandatory: false },
      teacher: { name: 'Amalia', surrname: 'Johnston', coursesTaught: []},
      duration: '9:40 - 10:35'
    },

    { subject: { id: 4, name: 'Physical Education', abbre: 'PE', isMandatory: true },
      teacher: { name: 'Aayan', surrname: 'Monaghan', coursesTaught: []},
      duration: '10:55 - 11:40'
    },

    { subject: { id: 5, name: 'Biology', abbre: 'BIO', isMandatory: false },
      teacher: { name: 'Darin', surrname: 'Metcalfe', coursesTaught: []},
      duration: '11:50 - 12:35'
    }
];