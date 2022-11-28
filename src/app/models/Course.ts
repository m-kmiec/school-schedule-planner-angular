import { Teacher } from "./Teacher";
import {Subject} from "./Subject";

export class Course{
    public get hoursReq(): number {
        return this._hoursReq;
    }
    public set hoursReq(value: number) {
        this._hoursReq = value;
    }
    public get duration(): number {
        return this._duration;
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get teacher(): Teacher {
        return this._teacher;
    }
    public set teacher(value: Teacher) {
        this._teacher = value;
    }
    public get subject(): Subject {
        return this._subject;
    }
    public set subject(value: Subject) {
        this._subject = value;
    }
    constructor(
        private _subject: Subject,
        private _teacher: Teacher,
        private _type: string,
        private _duration: number,
        private _hoursReq: number
    ){}
}