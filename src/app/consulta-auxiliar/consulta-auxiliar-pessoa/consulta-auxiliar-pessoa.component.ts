import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { AbstracaoPessoaServiceService } from 'src/app/consulta-pessoa/abstracao-pessoa-service.service';
import { Pessoa } from 'src/app/model/pessoa';

@Component({
  selector: 'app-consulta-auxiliar-pessoa',
  templateUrl: './consulta-auxiliar-pessoa.component.html',
  styleUrls: ['./consulta-auxiliar-pessoa.component.css']
})
export class ConsultaAuxiliarPessoaComponent implements OnInit, OnChanges {

  pessoas?: Pessoa[] = [];
  @Input() pessoasSelecionadas: Pessoa[] = [];
  @Output() newPessoasEvent = new EventEmitter<Pessoa[]>();

  constructor(private service:AbstracaoPessoaServiceService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.pessoas = this.service.consultarTodos();
  }

  selecionarPessoa(pessoa:Pessoa){
    if(!this.pessoasSelecionadas.includes(pessoa)){
      this.pessoasSelecionadas.push(pessoa);
    }
    else {
      let index = this.pessoasSelecionadas.findIndex(x => x.id === pessoa.id);      
      this.pessoasSelecionadas.splice(index, 1);
    }
  }

  recuperarDadosPessoas(dados: Pessoa[]) {
    this.newPessoasEvent.emit(dados);
  }
  

}
