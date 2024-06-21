import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../service/empregado.service';
import { Empregado } from '../model/empregado';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-atualizar-empregado',
  templateUrl: './atualizar-empregado.component.html',
  styleUrl: './atualizar-empregado.component.css'
})
export class AtualizarEmpregadoComponent implements OnInit{

  id: number;
  empregado: Empregado = new Empregado();

  constructor(private empregadoService: EmpregadoService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.empregadoService.buscarEmpregadoPorId(this.id).subscribe(date =>{
      this.empregado = date;                                                   // this.empregado é uma variável que armazena os detalhes do empregado atual. Ou seja, atualiza a variável this.empregado com os detalhes do empregado que foram recuperados do serviço empregadoService.
      }, error => console.log(error));
  }

  // Método para redirecionar (Router) para a página lista de empregados
  retornarListaEmpregado(){
    this.router.navigate(['/empregados']);
    Swal.fire('Empregado alterado', `O empregado ${this.empregado.nome} foi alterado com sucesso!`);
  }

  onSubmit(){
    this.empregadoService.atualizarEmpregado(this.id, this.empregado).subscribe(date => {
      this.retornarListaEmpregado();
    }, error => console.log(error));
  }

  // Método para botão cancelar roteando para lista de empregados
  btnCancelar(){
    this.router.navigate(['/empregados']);
  }
}

/*Para fins de estudo:
 *Router: O serviço Router é responsável por gerenciar as rotas do meu aplicativo Angular. Ele é usado para navegar entre as páginas do 
 *        aplicativo e para recuperar os parâmetros de URL.
 * 
 * ActivatedRoute: O serviço ActivatedRoute é uma extensão do serviço Router que fornece informações sobre a rota atual. Ele é usado para 
 *                 recuperar os parâmetros de URL da rota atual e para obter a rota atual.
 * 
 * Ou seja, Router corresponde ao serviço de rotas do Angular e ActivatedRoute correspodena uma extensão do serviço de rotas que fornece 
 * informações sobre a rota atual.
 * 
 * Esses serviços são usados em meu componente para:
 * Recuperar parâmetros de URL: Usando ActivatedRoute pode recuperar os parâmetros de URL da rota atual.
 * Navegar entre páginas: Usando Router pode navegar entre as páginas do aplicativo.
 * */