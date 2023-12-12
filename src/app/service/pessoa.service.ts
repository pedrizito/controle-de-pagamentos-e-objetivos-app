import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  URL = 'http://localhost:3000/pessoas';

  constructor(private httpClient: HttpClient) { }

  async consultarTodos(): Promise<Pessoa[]>{
    const resposta = await fetch(this.URL, {method: "GET"});
    const pessoas: Promise<Pessoa[]> = await resposta.json();
    return pessoas;
  }

  async consultarId(id: number): Promise<Pessoa>{
    const resposta = await fetch(this.URL + "//" + id, {method: "GET"});
    const pessoa: Promise<Pessoa> = await resposta.json();
    return pessoa;
  }

  async salvar(dado: Pessoa): Promise<Pessoa> {
    const resposta = await fetch(this.URL, {method: "POST", headers: { "Content-Type": "application/json"},body: JSON.stringify(dado)});
    return resposta.json();
  }

  async editar(dado: Pessoa): Promise<Pessoa> {
    const resposta = await fetch(this.URL + "//" + dado.id, {method: "PUT", headers: { "Content-Type": "application/json"},body: JSON.stringify(dado)});
    return resposta.json();
  }

  async deletar(dado: Pessoa): Promise<Pessoa> {
    const resposta = await fetch(this.URL + "//" + dado.id, {method: "DELETE"});
    return resposta.json();
  }
}
