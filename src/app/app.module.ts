import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Atividade07Componente01Component } from './atividade07-componente01/atividade07-componente01.component';
import { Atividade07Componente02Component } from './atividade07-componente02/atividade07-componente02.component';

@NgModule({
  declarations: [
    AppComponent,
    Atividade07Componente01Component,
    Atividade07Componente02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
