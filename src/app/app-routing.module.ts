import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCompraComponent } from './cadastro-compra/cadastro-compra.component';
import { ComponenteAtividade09Component } from './componente-atividade09/componente-atividade09.component';
import { ViewChildComponentComponent } from './view-child-component/view-child-component.component';

const routes: Routes = [
  { path: '', component:  MainPageComponent},
  { path: 'pessoa', component:  CadastroPessoaComponent},
  { path: 'compra', component:  CadastroCompraComponent},
  { path: 'atividade', component:  ComponenteAtividade09Component},
  { path: 'view', component:  ViewChildComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
