import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';
import { EmpregadoService } from '../service/empregado.service';

@Component({
  selector: 'app-cadastrar-empregado',
  templateUrl: './cadastrar-empregado.component.html',
  styleUrl: './cadastrar-empregado.component.css'
})
export class CadastrarEmpregadoComponent implements OnInit{

  empregado: Empregado = new Empregado();

  constructor(private empregadoService: EmpregadoService){}

  ngOnInit(): void {
  
  }

  cadastrarEmpregado(){
    this.empregadoService.cadastrarEmpregado(this.empregado).subscribe(date => {
      console.log(date);
      alert("Empregado cadastrado com Sucesso!");
    }, error => console.log(error));
  }

  onSubmit(){
    this.cadastrarEmpregado();
  }
}
