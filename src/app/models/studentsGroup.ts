import { Course } from "./course";

export class StudentGroup{
    constructor(
        public name: string,
        public additionalCourses: Course[]
    ){}
}