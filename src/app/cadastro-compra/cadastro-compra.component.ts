import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Compra } from '../model/compra';
import { CompraService } from '../service/compra.service';
import { Pessoa } from '../model/pessoa';
import { AbstracaoPessoaServiceService } from '../consulta-pessoa/abstracao-pessoa-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-compra',
  templateUrl: './cadastro-compra.component.html',
  styleUrls: ['./cadastro-compra.component.css']
})
export class CadastroCompraComponent implements OnInit, OnChanges {

  compras: Compra[] = [];
  pessoasLista: Pessoa[] = this.auxiliar.consultarTodos();
  pessoasSelecionadas: Pessoa[] = [];
  compra:Compra = new Compra("", 0, this.pessoasLista, 0, 0);
  @ViewChild('form') form!: NgForm;

  constructor(private service:CompraService, private auxiliar: AbstracaoPessoaServiceService, private router:Router) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.consultarTodos();    
  }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(){
    this.service.consultarTodos().subscribe({next: dados => (this.compras=dados), complete: ()=>(console.log(this.compras))});
  }

  onSubmit(){
    this.service.salvar(this.compra).subscribe({complete: () => (console.log(this.consultarTodos()))});
    this.pessoasSelecionadas = [];
    this.form.reset();
    this.compra.pessoas = [];
  }

  recuperarDadosFilho(pessoas:Pessoa[]){
    this.pessoasSelecionadas = pessoas;
    this.compra.pessoas = this.pessoasSelecionadas;
  }

  recuperarDadoFilho(compra:Compra){
    this.compra = compra;
    this.pessoasSelecionadas = compra.pessoas;
  }

  onDelete(){
    this.service.deletar(this.compra).subscribe({complete: () => (console.log(this.consultarTodos()))});
    this.pessoasSelecionadas = [];
    this.form.reset();
    this.compra.pessoas = [];
    this.compras = [];
    this.consultarTodos();
  } 

  mudarValor(){
    this.compra.valorParcial = this.compra.valorTotal / this.compra.parcelas;
  }
}
