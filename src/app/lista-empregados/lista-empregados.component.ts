import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';
import { EmpregadoService } from '../service/empregado.service';

@Component({
  selector: 'app-lista-empregados',
  templateUrl: './lista-empregados.component.html',
  styleUrl: './lista-empregados.component.css',
})
export class ListaEmpregadosComponent implements OnInit {
  empregados: Empregado[];

  constructor(private empregadoService: EmpregadoService) {}

  ngOnInit(): void {
    this.buscarListaEmpregados();
  }

  // Método para listar empregados
  private buscarListaEmpregados() {
    this.empregadoService.buscarListaEmpregados().subscribe((date) => {
      this.empregados = date;
    });
  }
}
