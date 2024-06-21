import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';
import { EmpregadoService } from '../service/empregado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empregados',
  templateUrl: './lista-empregados.component.html',
  styleUrl: './lista-empregados.component.css',
})
export class ListaEmpregadosComponent implements OnInit {
  empregados: Empregado[];

  constructor(private empregadoService: EmpregadoService, private router: Router) {}

  ngOnInit(): void {
    this.buscarListaEmpregados();
  }

  // Método para listar empregados
  private buscarListaEmpregados() {
    this.empregadoService.buscarListaEmpregados().subscribe((date) => {
      this.empregados = date;
    });
  }

  // Ver detalhes da busca de empregado buscado pelo Id
  verDetalhesBuscaEmpregadoPorId(id: number){
    this.router.navigate(['buscar-empregado-id', id]);
  }

  // rota para atualizar empregado
  atualizarEmpregado(id: number){
    this.router.navigate(['atualizar-empregado', id]);
  }
}
