import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-atividade08',
  templateUrl: './componente-atividade08.component.html',
  styleUrls: ['./componente-atividade08.component.css']
})
export class ComponenteAtividade08Component implements OnInit {

  valor1!:number;
  valor2!:number;
  operacao!:string;
  resultado!:number;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.resultado=0;
  }

  onButtonClick(){
    this.resultado = this.tipoOperacao(this.valor1, this.valor2);
  }

   tipoOperacao(a:number, b:number): number {
    if(this.operacao.toLowerCase() == "somar"){
      return a+b;
    }
    else if(this.operacao.toLowerCase() == "multiplicar"){
      return a*b;
    }
    else {
      alert("Digite somar ou multiplicar no primeiro campos e digite um número nos outros dois");
      return 0;
    }
  }

}
