import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddLibroPage } from '../pages/add-libro/add-libro';

import { LibroService } from '../providers/libro-service';
import { LoginService } from '../providers/login-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddLibroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddLibroPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, LibroService, LoginService]
})
export class AppModule { }
