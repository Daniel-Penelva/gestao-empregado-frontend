import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpregadosComponent } from './lista-empregados/lista-empregados.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarEmpregadoComponent } from './cadastrar-empregado/cadastrar-empregado.component';
import { FormsModule } from '@angular/forms';
import { AtualizarEmpregadoComponent } from './atualizar-empregado/atualizar-empregado.component';
import { BuscarEmpregadoComponent } from './buscar-empregado/buscar-empregado.component';
import { RemoverEmpregadoComponent } from './remover-empregado/remover-empregado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpregadosComponent,
    CadastrarEmpregadoComponent,
    AtualizarEmpregadoComponent,
    BuscarEmpregadoComponent,
    RemoverEmpregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
