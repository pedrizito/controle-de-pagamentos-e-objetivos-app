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
import { ComponenteAtividade09Component } from './componente-atividade09/componente-atividade09.component';
import { ComponenteAuxiliarAtividade09Component } from './componente-auxiliar-atividade09/componente-auxiliar-atividade09.component';
import { ViewChildComponentComponent } from './view-child-component/view-child-component.component';
import { ViewChildAuxiliarComponent } from './view-child-auxiliar/view-child-auxiliar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    CadastroPessoaComponent,
    CadastroCompraComponent,
    ComponenteAtividade09Component,
    ComponenteAuxiliarAtividade09Component,
    ViewChildComponentComponent,
    ViewChildAuxiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
