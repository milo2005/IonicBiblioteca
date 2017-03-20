import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Libro } from '../../models/libro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  libros:Libro[];

  constructor(public navCtrl: NavController) {
    this.libros = [];
  }

}
