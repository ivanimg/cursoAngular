import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styles: []
})
export class TracerComponent implements OnInit {

  constructor(public servicio: LogService) {
    servicio.escribirTrazar("Estoy en el contructor");
    servicio.escribirError("Error en el constructor");
  }

  ngOnInit() {
    this.servicio.escribirTrazar("en el OnInit");
    this.servicio.escribirWarning("Warning en el OnInit");
  }

}
