import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Libro } from '../../models/libro';
import { LibroService } from '../../providers/libro-service';

@Component({
  selector: 'page-add-libro',
  templateUrl: 'add-libro.html'
})
export class AddLibroPage {

  libro: Libro;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service: LibroService) {

    this.libro = new Libro();

  }

  save() {
    this.service.add(this.libro).subscribe(res=>{
      this.navCtrl.pop();
    });
  }

}
