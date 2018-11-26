import { Categoria } from './models/categoria';
import { MultiplicadorPipe } from './multiplicador.pipe';
import { Component } from '@angular/core';
//import { url } from 'inspector';
/**
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  cursos = {'id': 1, 'nombre': 'Beca Java Krell', 'duracion': 120},
          {'id': 1, 'nombre': 'Beca NodeJS Krell', 'duracion': 40}
} */
/*
@Component({
  selector: 'app-root',
  template: `<h1>>{{title}}</h1>
  <ul>
    <li *ngFor="let curso of cursos" (click)="seleccionar(curso)">
      <h2>{{curso.nombre}}</h2>
      <p>{{curso.descripcion}}</p>
      <div *ngIf='curso.duracion === 8 then thenBlock else elseBlock'></div>
        <ng-template #thenBlock>Jornada Completa</ng-template>
        <ng-template #elseBlock>Media Jornada</ng-template>
    </li>
  </ul>`
})
export class AppComponent {
  title = 'Curso de Angular';
  cursos = [{'id': 1, 'nombre': 'Beca Java Krell', 'duracion': 8, 'descripcion': 'asdf'},
          {'id': 2, 'nombre': 'Beca NodeJS Krell', 'duracion': 4, 'descripcion': 'asdffda'}];

  seleccionar(curso){
    console.log(curso);
  }
}*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' /*`<h1>{{titulo}}</h1>
  <ul>
    <li *ngFor='let curso of cursos'>
      <h2>{{curso.nombre | uppercase}}</h2>
      <p>{{curso.descripcion}}</p>
      <p *ngIf='curso.duracion === 8'>Jornada Completa</p>
      <p *ngIf='curso.duracion < 8'>Media Jornada</p>
      <p>{{curso.precio | currency:'EUR':true}}</p>
      <p>{{ curso.fecha | date : "dd-MM-yyyy" }}</p>
      <p>{{curso.precio | multiplicador : 3}}</p>
    </li>
  </ul>
  <app-tracer></app-tracer>
  <app-categoria>
    <li *ngFor='let categoria of categorias'>
      <h2>{{curso.nombre | uppercase}}</h2>
      <p>{{curso.descripcion}}</p>
      <p *ngIf='categoria.duracion === 8'>Jornada Completa</p>
      <p *ngIf='curso.duracion < 8'>Media Jornada</p>
      <p>{{curso.precio | currency:'EUR':true}}</p>
      <p>{{ curso.fecha | date : "dd-MM-yyyy" }}</p>
      <p>{{curso.precio | multiplicador : 3}}</p>
    </li>
  </app-categoria>*/


})

export class AppComponent {
  titulo = 'Mis cursos!';
  cursos = [
  { 'id': 1, 'nombre': 'Angular 2', 'descripcion': 'Introducción al desarrollo avanzado en Js', 'duracion': 8, 'precio': 50.50, 'fecha': new Date () },
  { 'id': 2, 'nombre': 'Nodejs', 'descripcion': 'Introducción al desarrollo server-side en Js', 'duracion': 4, 'precio': 75.25, 'fecha': new Date() }
  ];
}
