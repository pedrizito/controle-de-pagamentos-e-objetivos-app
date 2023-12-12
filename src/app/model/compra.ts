import { Pessoa } from "./pessoa";

export class Compra {
    id!: number;
    objetivo!: string;
    valorTotal!: number;
    pessoas!: Pessoa[];
    parcelas!: number;
    valorParcial!: number;
    
    constructor(objetivo:string,
                valorTotal:number,
                pessoas:Pessoa[],
                parcelas:number,
                valorParcial:number){
                    this.objetivo=objetivo;
                    this.valorParcial=valorParcial;
                    this.valorTotal=valorTotal;
                    this.pessoas=pessoas;
                    this.parcelas=parcelas;
                };
}
