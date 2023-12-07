import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCompraComponent } from './cadastro-compra/cadastro-compra.component';
import { ComponenteAtividade10Component } from './componente-atividade10/componente-atividade10.component';
import { ConsultaPessoaComponent } from './consulta-pessoa/consulta-pessoa.component';

const routes: Routes = [
  { path: '', component:  MainPageComponent},
  { path: 'pessoa', component:  CadastroPessoaComponent},
  { path: 'compra', component:  CadastroCompraComponent},
  { path: 'atividade', component:  ComponenteAtividade10Component},
  { path: 'consulta-pessoa', component:  ConsultaPessoaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
