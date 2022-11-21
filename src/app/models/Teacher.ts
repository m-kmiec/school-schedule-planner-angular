import { Course } from "./course";

export class Teacher{
    constructor(
        public name: string,
        public surrname: string,
        public coursesTaught: Course[],
    ){}
}