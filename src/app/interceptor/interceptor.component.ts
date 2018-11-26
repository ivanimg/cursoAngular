import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styles: []
})
export class InterceptorComponent implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }

}
