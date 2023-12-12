import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../model/compra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  URL = 'http://localhost:3000/compras';
  

  constructor(private service: HttpClient) { }

   consultarTodos(): Observable<Compra[]>{
    return this.service.get<Compra[]>(this.URL);
   } 

   consultarID(dados:Compra): Observable<Compra>{
    return this.service.get<Compra>(this.URL + "/" + dados.id);
   } 

   salvar(dados: Compra) : Observable<Compra>{
    let compra: Compra = new Compra("", 0, [], 0, 0);  
      this.consultarID(dados).subscribe({next: x => {compra = x ; console.log(compra)}, error: (err)=>(console.log("Não encontrado"))});
    
      if(dados.id == null){
        return this.service.post<Compra>(this.URL, dados);
     }
     else {
        return this.service.put<Compra>(this.URL + "/" + dados.id, dados);
     }  
   }

   deletar(dados: Compra): Observable<Compra>{
    return this.service.delete<Compra>(this.URL + "/" + dados.id);
   }

}