export class Subject{
    constructor(
        public id: number,
        public name:string,
        public abbre: string,
        public isMandatory: boolean = false
        ){}
}