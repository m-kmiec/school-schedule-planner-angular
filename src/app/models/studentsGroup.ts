import { Course } from "./Course";
import { Service } from '../data/data.service';

export class StudentGroup{
    constructor(
        public name: string,
        public additionalCourses: Course[],
    ){
    }
}