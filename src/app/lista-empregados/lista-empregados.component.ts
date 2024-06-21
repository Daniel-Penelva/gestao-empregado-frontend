import { Component, OnInit } from '@angular/core';
import { Empregado } from '../model/empregado';
import { EmpregadoService } from '../service/empregado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  // Remover empregado
  removerEmpregado(id: number){
    Swal.fire({
      title: 'Confirmação',
      text: "Confirma se deseja deletar empregado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim , deletar',
      cancelButtonText: 'Não, cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      buttonsStyling: true
    }).then((result: any) => {
      if(result.value){
        this.empregadoService.removerEmpregado(id).subscribe(date => {
          console.log(date);
          this.buscarListaEmpregados();
          Swal.fire(
            'Empregado Deletado',
            'Empregado deletado com sucesso',
            'success'
          )
        })
      }
    })
  }

}
