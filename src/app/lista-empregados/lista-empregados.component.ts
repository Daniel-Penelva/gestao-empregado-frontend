import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';

@Component({
  selector: 'app-lista-empregados',
  templateUrl: './lista-empregados.component.html',
  styleUrl: './lista-empregados.component.css',
})
export class ListaEmpregadosComponent implements OnInit {
  
  empregados: Empregado[];

  constructor() {}

  ngOnInit(): void {
    this.empregados = [
      {
        id: 1,
        nome: 'Daniel',
        sobrenome: 'Penelva',
        email: 'daniel@gmail.com',
      },
      {
        id: 2,
        nome: 'Biana',
        sobrenome: 'Mota',
        email: 'biana@gmail.com',
      },
      {
        id: 3,
        nome: 'João',
        sobrenome: 'Silva',
        email: 'joao@gmail.com',
      },
    ];
  }
}
