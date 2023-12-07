import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCompraComponent } from './cadastro-compra/cadastro-compra.component';
import { ComponenteAtividade10Component } from './componente-atividade10/componente-atividade10.component';
import { ConsultaCompraComponent } from './consulta-compra/consulta-compra.component';
import { ConsultaPessoaComponent } from './consulta-pessoa/consulta-pessoa.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    CadastroPessoaComponent,
    CadastroCompraComponent,
    ComponenteAtividade10Component,
    ConsultaCompraComponent,
    ConsultaPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
