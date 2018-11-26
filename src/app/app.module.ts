import { MultiplicadorPipe } from './multiplicador.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerComponentComponent } from './logger-component/logger-component.component';
import { TracerComponent } from './tracer/tracer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { InterceptorComponent } from './interceptor/interceptor.component'

@NgModule({
  declarations: [
    AppComponent,
    MultiplicadorPipe,
    LoggerComponentComponent,
    TracerComponent,
    CategoriaComponent,
    FormDemoComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorComponent,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
