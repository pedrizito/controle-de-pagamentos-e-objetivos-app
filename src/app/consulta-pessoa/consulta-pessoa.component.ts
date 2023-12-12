import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { AbstracaoPessoaServiceService } from './abstracao-pessoa-service.service';

@Component({
  selector: 'app-consulta-pessoa',
  templateUrl: './consulta-pessoa.component.html',
  styleUrls: ['./consulta-pessoa.component.css']
})
export class ConsultaPessoaComponent implements OnInit, OnChanges {
  @Input() pessoas?: Pessoa[] = [];
  @Output() newPessoaEvent = new EventEmitter<Pessoa>();

  constructor(private service: AbstracaoPessoaServiceService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {   
  }

  recuperarDadosPessoa(dado: Pessoa) {
    this.newPessoaEvent.emit(dado);
  }
}
