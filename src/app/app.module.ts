import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroCompraComponent } from './cadastro-compra/cadastro-compra.component';
import { ConsultaCompraComponent } from './consulta-compra/consulta-compra.component';
import { ConsultaPessoaComponent } from './consulta-pessoa/consulta-pessoa.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import { ConsultaAuxiliarPessoaComponent } from './consulta-auxiliar/consulta-auxiliar-pessoa/consulta-auxiliar-pessoa.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    CadastroPessoaComponent,
    CadastroCompraComponent,
    ConsultaCompraComponent,
    ConsultaPessoaComponent,
    ConsultaAuxiliarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    NoopAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
