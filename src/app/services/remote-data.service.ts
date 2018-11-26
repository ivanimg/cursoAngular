import { Categoria } from './../models/categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(public httpClient: HttpClient) { }
  public SERVER = 'http://192.168.1.80:8090/categoria';

  retornarData(){
    //console.log(this.httpClient.get<Array<Categoria>>('http://192.168.1.80:8090/categoria'));//'http://localhost:666/categoria'));
    return this.httpClient.get<Array<Categoria>>(this.SERVER);
  }

  retornarCategoria(id: number){
    //console.log(this.httpClient.get<Array<Categoria>>('http://192.168.1.80:8090/categoria'));//'http://localhost:666/categoria'));
    return this.httpClient.get<Categoria>(this.SERVER+id);
  }


  public addCategoria(categoria: Categoria): Observable<any>{
    return this.httpClient.post<Categoria>(this.SERVER, categoria);
  }

}
