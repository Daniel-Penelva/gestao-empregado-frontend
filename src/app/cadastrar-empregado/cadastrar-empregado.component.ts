import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';
import { EmpregadoService } from '../service/empregado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-empregado',
  templateUrl: './cadastrar-empregado.component.html',
  styleUrl: './cadastrar-empregado.component.css'
})
export class CadastrarEmpregadoComponent implements OnInit{

  empregado: Empregado = new Empregado();

  constructor(private empregadoService: EmpregadoService, private router: Router){}

  ngOnInit(): void {
  
  }

  cadastrarEmpregado(){
    this.empregadoService.cadastrarEmpregado(this.empregado).subscribe(date => {
      console.log(date);
      //alert("Empregado cadastrado com Sucesso!");

      this.retornarListaEmpregado();

    }, error => console.log(error));
  }

  // Método para redirecionar (Router) para a página lista de empregados depois de cadastrar empregado
  retornarListaEmpregado(){
    this.router.navigate(['/empregados']);
    Swal.fire('Empregado registrado', `O empregado ${this.empregado.nome} foi cadastrado com sucesso!`);
  }

  onSubmit(){
    this.cadastrarEmpregado();
  }
}
