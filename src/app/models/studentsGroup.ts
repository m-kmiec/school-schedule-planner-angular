import { Course } from "./Course";

export class StudentGroup{
    constructor(
        public name:string,
        public additionalCourses: Course[]
    ){}
}