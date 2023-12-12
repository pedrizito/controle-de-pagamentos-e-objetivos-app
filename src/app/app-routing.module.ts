import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCompraComponent } from './cadastro-compra/cadastro-compra.component';
import { ConsultaPessoaComponent } from './consulta-pessoa/consulta-pessoa.component';
import { ConsultaCompraComponent } from './consulta-compra/consulta-compra.component';

const routes: Routes = [
  { path: '', component:  MainPageComponent},
  { path: 'pessoa', component:  CadastroPessoaComponent},
  { path: 'compra', component:  CadastroCompraComponent},
  { path: 'consulta-pessoa', component:  ConsultaPessoaComponent},
  { path: 'consulta-compra', component:  ConsultaCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
