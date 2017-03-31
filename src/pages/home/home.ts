import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Libro } from '../../models/libro';
import { LibroService } from '../../providers/libro-service';

import { AddLibroPage } from '../add-libro/add-libro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  libros: Libro[];

  constructor(public navCtrl: NavController, public service: LibroService) {
    this.libros = [];
  }

  ionViewDidEnter() {
    this.service.all().subscribe(data => this.libros = data);
  }

  goToAdd() {
    this.navCtrl.push(AddLibroPage);
  }


}
