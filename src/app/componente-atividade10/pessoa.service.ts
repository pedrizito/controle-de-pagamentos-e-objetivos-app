import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  pessoas!: Pessoa[];

  constructor() { 
  }

  public salvar(data: Pessoa) {
    localStorage.setItem(data.cpf, JSON.stringify(data));
  }

  public deletar(data: string){
    localStorage.removeItem(data);
  }

  public consultar(data : string): Pessoa {
    let pessoa : Pessoa = new Pessoa("","","",0);
    pessoa = JSON.parse(localStorage.getItem(data)!);
    return pessoa;
  } 

  public consultarTodos(): Array<Pessoa>{
    let pessoas: Pessoa[]  = [];

    for(let i=0; i<localStorage.length;i++){
      pessoas.push(JSON.parse(localStorage.getItem(localStorage.key(i)!)!));
    }

    return pessoas;
  }
}
