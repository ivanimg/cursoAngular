import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria';
import { RemoteDataService } from './../services/remote-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  public data: Observable<Array<Categoria>>;
  listado: Array<Categoria>;
  unaCategoria:Categoria;

  contador = interval(2008);

  constructor(public remote: RemoteDataService) { }

  ngOnInit() {
    this.data = this.remote.retornarData();
    this.data.subscribe(arrayData => {
      this.listado = arrayData;
      //console.log(arrayData);
    }, error => {
      console.log("Error en la llamada");
    })

    this.contador.subscribe(segundo => {
      console.log(`Estamos en el segundo ${segundo} del intervalo`);
    })
  }

  verDetalles(id: number){
    this.remote.retornarCategoria(id).subscribe(item => {
      //this.unaCategoria = item;
      console.log(item);
    })
  }

}
