import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpregadosComponent } from './lista-empregados/lista-empregados.component';
import { CadastrarEmpregadoComponent } from './cadastrar-empregado/cadastrar-empregado.component';

const routes: Routes = [
  {path: 'empregados', component: ListaEmpregadosComponent},
  {path: '', redirectTo: 'empregados', pathMatch: 'full'},
  {path: 'cadastrar-empregado', component: CadastrarEmpregadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
