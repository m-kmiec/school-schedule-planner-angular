import { Teacher } from "./Teacher";
import {Subject} from "./Subject";

export class Course{
    constructor(
        public subject: Subject,
        public teacher: Teacher,
        public startsAt: string,
        public endsAt: string,
        public hoursReq: number
    ){}
}