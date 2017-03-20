import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { LoginService } from '../providers/login-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'  
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

  }

  login() {

  }

}
