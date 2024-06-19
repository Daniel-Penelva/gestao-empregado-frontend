import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpregadosComponent } from './lista-empregados/lista-empregados.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarEmpregadoComponent } from './cadastrar-empregado/cadastrar-empregado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpregadosComponent,
    CadastrarEmpregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
