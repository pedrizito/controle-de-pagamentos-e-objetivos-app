import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChildAuxiliarComponent } from '../view-child-auxiliar/view-child-auxiliar.component';

@Component({
  selector: 'app-view-child-component',
  templateUrl: './view-child-component.component.html',
  styleUrls: ['./view-child-component.component.css']
})
export class ViewChildComponentComponent implements OnInit {
  numeros!: Array<number>;
  tipoNumero!:string;
  repeticao!:number;
  @ViewChild(ViewChildAuxiliarComponent) child!: ViewChildAuxiliarComponent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.tipoNumero = params['numeros'])
    this.route.queryParams.subscribe(params => this.repeticao = params['repeticao'])

    if(this.tipoNumero == "pares"){
      this.numeros = this.gerarNumeroPares();
    }
    else {
      this.numeros = this.gerarNumeroImpares();
    }
  }

  gerarNumeroImpares(): Array<number>{
    var numeros: Array<number> = new Array<number>();
    if(this.repeticao > 30 || this.repeticao <= 0){
      this.repeticao = 30;
    }
    for(var num = 0; num < this.repeticao; num++){
      console.log(num);
      if(num%2 != 0){        
        numeros.push(num);
      }
    }

    return numeros;
  }

  gerarNumeroPares(): Array<number>{
    var numeros: Array<number> = new Array<number>();

    if(this.repeticao > 30 || this.repeticao <= 0){
      this.repeticao = 30;
    }

    for(var num = 0; num < this.repeticao; num++){
      if(num%2 == 0){
        numeros.push(num);
      }
    }
    return numeros;
  }  

  ngAfterViewInit() {
    console.log(this.child.metodoDoFilhoAuto()); // I am a child component!
  }
}
