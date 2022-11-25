export class Subject{
    constructor(
        private name: string,
        private abbre: string,
        private isMandatory: boolean = false
        ){}

        public set _abbre(_abbre: string){
            this.abbre = _abbre;
        }

        public get _abbre(){
            return this.abbre;
        }

        public set _name(_name: string){
            this.name = _name;
        }

        public get _name(){
            return this.name;
        }


        public set _mandatory(mandatory: boolean){
            this.isMandatory = mandatory;
        }

        public get _mandatory(){
            return this.isMandatory;
        }
}