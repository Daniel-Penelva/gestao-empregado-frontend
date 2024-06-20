import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empregado } from '../model/empregado';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  // URL para listar todos os empregados
  private baseUrl = 'http://localhost:8080/api/v1/empregados';

  constructor(private httpClient: HttpClient) { }

  // Método para listar empregados
  buscarListaEmpregados():Observable<Empregado[]>{
    return this.httpClient.get<Empregado[]>(`${this.baseUrl}`);
  }

  // Método para cadastrar empregado
  cadastrarEmpregado(empregado: Empregado):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, empregado);
  }

  // Método para buscar empregado por id
  buscarEmpregadoPorId(id: number):Observable<Empregado>{
    return this.httpClient.get<Empregado>(`${this.baseUrl}/${id}`);
  }

}
