import { Teacher } from "./teacher";
import {Subject} from "./subject";

export class Course{
    constructor(
        public subject: Subject,
        public teacher: Teacher,
        public duration: string
   ){}
}