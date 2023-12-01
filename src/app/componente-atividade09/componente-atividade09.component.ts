import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-atividade09',
  templateUrl: './componente-atividade09.component.html',
  styleUrls: ['./componente-atividade09.component.css']
})
export class ComponenteAtividade09Component implements OnInit {
  nome!: string;
  sobrenome!: string;
  idade!: number
  numeroRepeticao!: number;

  constructor() {
    this.nome = "Pedro Henrique";
    this.sobrenome = "Monteiro";
    this.idade = 0;
    this.numeroRepeticao = 0
   }

  ngOnInit(): void {
  }

  setIdade(idade: number) {
    this.idade = idade;
  }

}
