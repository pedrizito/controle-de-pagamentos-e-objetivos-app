import { Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { NgForm } from '@angular/forms';
import { AbstracaoPessoaServiceService } from '../consulta-pessoa/abstracao-pessoa-service.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit, OnChanges {
  @ViewChild('form') form!: NgForm;
  pessoa: Pessoa = new Pessoa("", "","",0);;
  pessoas?: Pessoa[];

  constructor(private service: AbstracaoPessoaServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.pessoas = this.service.consultarTodos();
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.pessoas = this.service.consultarTodos();
  }

  onSubmit(){
    this.service.salvar(this.pessoa);
    this.form.reset();
    this.pessoa = new Pessoa('', '', '', 0);
    this.pessoas = this.service.consultarTodos();
  }

  recuperarPessoaDoEvento(dados: Pessoa) {
    this.pessoa = dados;
  }

  onDelete(){
    this.service.deletar(this.pessoa);
    this.form.reset();
    this.pessoas = this.service.consultarTodos();
    this.pessoa = new Pessoa("", "","",0);;
  }
}
