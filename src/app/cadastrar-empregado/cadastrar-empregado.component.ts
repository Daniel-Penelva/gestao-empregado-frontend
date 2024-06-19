import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';

@Component({
  selector: 'app-cadastrar-empregado',
  templateUrl: './cadastrar-empregado.component.html',
  styleUrl: './cadastrar-empregado.component.css'
})
export class CadastrarEmpregadoComponent implements OnInit{

  empregado: Empregado = new Empregado();

  constructor(){}

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log(this.empregado);
  }
}
