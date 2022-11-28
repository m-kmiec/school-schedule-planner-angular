import { Course } from "./Course";
import { Service } from '../data/data.service';

export class StudentGroup{
    constructor(
        private _name: string,
        private _additionalCourses: Course[],
    ){
    }

    public set name(name: string){
        this._name = name;
    }

    public get name(){
        return this._name;
    }

    public set additionalCourses(additionalCourses: Course[]){
        this._additionalCourses = additionalCourses;
    }

    public get additionalCourses(): Course[]{
        return this._additionalCourses;
    }
}