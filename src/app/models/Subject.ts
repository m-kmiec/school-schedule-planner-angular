export class Subject{
    constructor(
        private _name: string,
        private _abbre: string,
        private _isMandatory: boolean = false
        ){}

        public set abbre(abbre: string){
            this._abbre = abbre;
        }

        public get abbre(): string{
            return this._abbre;
        }

        public set name(name: string){
            this._name = name;
        }

        public get name(): string{
            return this._name;
        }


        public set isMandatory(mandatory: boolean){
            this._isMandatory = mandatory;
        }

        public get isMandatory(): boolean{
            return this._isMandatory;
        }
}