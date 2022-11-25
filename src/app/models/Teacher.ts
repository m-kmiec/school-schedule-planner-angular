import { Course } from "./Course";

export class Teacher{
    constructor(
        public name: string,
        public surrname: string,
        public coursesTaught: Course[],
    ){}
}