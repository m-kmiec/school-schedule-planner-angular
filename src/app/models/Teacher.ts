import { Course } from "./Course";

export class Teacher{
    constructor(
        private _name: string,
        private _surrname: string,
        private _coursesTaught: Course[],
    ){}

    public set name(name: string){
        this._name = name;
    }

    public get name(): string{
        return this._name;
    }

    public set surrname(surrname: string){
        this._surrname = surrname;
    }

    public get surrname(){
        return this._surrname;
    }

    public set coursesTaught(coursesTaught: Course[]){
        this._coursesTaught = coursesTaught;
    }

    public get coursesTaught(): Course[]{
        return this._coursesTaught;
    }
}