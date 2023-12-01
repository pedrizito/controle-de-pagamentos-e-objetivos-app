import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-auxiliar',
  templateUrl: './view-child-auxiliar.component.html',
  styleUrls: ['./view-child-auxiliar.component.css']
})
export class ViewChildAuxiliarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  metodoDoFilhoManual(){
    console.log("Esse método foi gerado na classe view-child-auxiliar-component e disparado manualmente variavel de template");
  }

  metodoDoFilhoAuto(){
    console.log("Esse método foi gerado na classe view-child-auxiliar-component e disparado automaticamente com @ViewChild");
  }

}
