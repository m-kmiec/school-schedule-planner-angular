import { Course } from "./Course";
import { Service } from '../data/data.service';

export class StudentGroup{
    constructor(
        public name: string,
        public additionalCourses: Course[]
        // private service: Service
    ){
        // this.service.getCourses().
        // subscribe(data => {
        //     this.additionalCourses = data;
        //     this.additionalCourses = this.additionalCourses.filter(e => e.subject.mandatory==true)
        // })
    }
}