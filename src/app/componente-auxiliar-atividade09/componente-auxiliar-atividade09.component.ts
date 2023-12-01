import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-auxiliar-atividade09',
  templateUrl: './componente-auxiliar-atividade09.component.html',
  styleUrls: ['./componente-auxiliar-atividade09.component.css']
})
export class ComponenteAuxiliarAtividade09Component implements OnInit {
  @Input() nome!: string;
  @Input() sobrenome!: string
  @Output() idade = new EventEmitter<number>();
  idadeValor!: number;

  constructor() { }

  ngOnInit(): void {
  }

  informarIdade(idade: number): void {
    this.idade.emit(idade);
  }


}
