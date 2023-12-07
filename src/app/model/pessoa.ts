export class Pessoa {
    id!: number;
    nome!: string;
    vinculo!: string;
    cpf!: string;
    salario!: number;

    constructor(nome:string, vinculo:string, cpf:string, salario:number){
        this.nome = nome;
        this.vinculo = vinculo;
        this.cpf = cpf;
        this.salario = salario;
    }
}
