import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Compra } from '../model/compra';

@Component({
  selector: 'app-consulta-compra',
  templateUrl: './consulta-compra.component.html',
  styleUrls: ['./consulta-compra.component.css']
})
export class ConsultaCompraComponent implements OnInit, OnChanges {
  @Input() compras?: Compra[] = [];
  @Output() newCompraEvent = new EventEmitter<Compra>();

  constructor() { 
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  transmitirDados(dados: Compra){
    this.newCompraEvent.emit(dados);
  }
  

}
