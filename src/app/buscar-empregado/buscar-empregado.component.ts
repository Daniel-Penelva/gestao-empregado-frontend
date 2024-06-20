import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../service/empregado.service';
import { Empregado } from '../model/empregado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-empregado',
  templateUrl: './buscar-empregado.component.html',
  styleUrl: './buscar-empregado.component.css'
})
export class BuscarEmpregadoComponent implements OnInit{

  id: number;
  empregado: Empregado;

  constructor(private route: ActivatedRoute, private empregadoService: EmpregadoService){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.empregado = new Empregado();
      this.empregadoService.buscarEmpregadoPorId(this.id).subscribe(date => {
        this.empregado = date;
        alert(`Detalhes do empregado ${this.empregado.nome}`);
      });
  }

}
