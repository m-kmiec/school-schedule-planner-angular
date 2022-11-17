import { Teacher } from "./Teacher";
import {Subject} from "./Subject";

export class Course{
    constructor(
        public subject: Subject,
        public teacher: Teacher,
        public duration: string
    ){}
}