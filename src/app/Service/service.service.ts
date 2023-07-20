import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8010/ejemplo/clientes'
  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }
  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url,cliente);
  }
  getClienteId(id:number){
    return this.http.get<Cliente>(this.Url+"/"+id);
  }
  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id, cliente);
  }
}
