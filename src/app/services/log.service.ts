import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  escribirTrazar(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.log(mensaje);
    });
  }

  escribirError(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.error(mensaje);
    });
  }

  escribirWarning(...mensaje: string[]) {

    mensaje.forEach(msg => {
      console.warn(mensaje);
    });
  }
}
