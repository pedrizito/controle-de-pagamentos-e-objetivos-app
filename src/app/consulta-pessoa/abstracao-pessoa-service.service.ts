import { Injectable } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class AbstracaoPessoaServiceService {

  mensagem: string = "";


  constructor(private service: PessoaService) { }

  consultarTodos() : Pessoa[] {
    let pessoas: Pessoa[] = [];

    this.service.consultarTodos().then(resposta =>{resposta.forEach(element => {
      pessoas?.push(element);
    });});
    
    return pessoas;
  }

  consultarId(id:number) : Pessoa {
    let pessoa: Pessoa = new Pessoa("","","",0);
    this.service.consultarId(id).then(resposta =>{pessoa = resposta} );    
    return pessoa;
  }

  salvar(dado : Pessoa): Pessoa{
    let pessoa: Pessoa = new Pessoa("","","",0);

    if(dado.id != null){
      this.service.editar(dado).then(resposta => pessoa = resposta);
      this.mensagem = "Informação editada do banco de dados!";
      this.informarMudanca(); 
    } else {
      this.service.salvar(dado).then(resposta => pessoa = resposta);  
      this.mensagem = "Informação salva do banco de dados!";
      this.informarMudanca();     
    }  
    return pessoa;  
  }

  deletar(dado: Pessoa): Pessoa{
    let pessoa: Pessoa = new Pessoa("","","",0);

    if(this.consultarId(dado.id) != null ){
      this.service.deletar(dado).then(resposta => pessoa = resposta);
      this.mensagem = "Informação deletada do banco de dados!";
      this.informarMudanca(); 
    }
    
    return pessoa
  }

  informarMudanca(){
    alert(this.mensagem);
  }
}
