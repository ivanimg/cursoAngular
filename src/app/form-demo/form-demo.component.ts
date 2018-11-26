import { RemoteDataService } from './../services/remote-data.service';
import { Categoria } from './../models/categoria';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styles: []
})
export class FormDemoComponent implements OnInit {

  public cat: Categoria;

  constructor(public post: RemoteDataService) {
    this.cat = new Categoria();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(this.cat);
    this.post.addCategoria(this.cat).subscribe{
      almacenamiento => {
        console.log(almacenamiento);
      }
    };
  }

  limpiar(f: NgForm){
    f.reset();
  }

}
