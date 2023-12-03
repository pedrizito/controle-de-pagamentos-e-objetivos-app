import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { NgForm } from '@angular/forms';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-componente-atividade10',
  templateUrl: './componente-atividade10.component.html',
  styleUrls: ['./componente-atividade10.component.css']
})
export class ComponenteAtividade10Component implements OnInit {
  @ViewChild('form') form!: NgForm;
  pessoa!: Pessoa;
  pessoas?: Pessoa[];

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa("", "","",0);
    this.pessoas = this.service.consultarTodos();
  }

  onSubmit(){
    this.service.salvar(this.pessoa);
    this.form.reset();
    this.pessoa = new Pessoa('', '', '', 0);
    this.pessoas = this.service.consultarTodos();
  }

  onEdit(data: Pessoa) {
    this.pessoa.nome = data.nome;
    this.pessoa.cpf = data.cpf;
    this.pessoa.salario = data.salario;
    this.pessoa.vinculo = data.vinculo;
  }

  onDelete(data: Pessoa) {
    let confirmation = confirm("Você quer mesmo deletar " + data.nome + " do sistema?");
    if(confirmation){
      this.service.deletar(data.cpf);
    }
    this.pessoas = this.service.consultarTodos();
  }

}
