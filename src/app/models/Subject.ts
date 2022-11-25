export class Subject{
    constructor(
        private _name: string,
        private _abbre: string,
        private _isMandatory: boolean = false
        ){}

        public set abbre(abbre: string){
            this._abbre = abbre;
        }

        public get abbre(){
            return this._abbre;
        }

        public set name(name: string){
            this._name = name;
        }

        public get name(){
            return this._name;
        }


        public set mandatory(mandatory: boolean){
            this._isMandatory = mandatory;
        }

        public get mandatory(){
            return this._isMandatory;
        }
}