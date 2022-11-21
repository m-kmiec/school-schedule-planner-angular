import { Course } from "../models/Course";

export class Teacher{
    constructor(
        public name: string,
        public surrname: string,
        public coursesTaught: Course[],
    ){}
}