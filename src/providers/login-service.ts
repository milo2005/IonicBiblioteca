import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { URL } from '../app/app.config';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  signin(user: User) {
    return this.http.post(URL+"/users/signin", user).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  login(username: string, password: string): Observable<{ success: boolean, user: any }> {
    const body = { username: username, password: password };
    return this.http.post(URL+"/users/login", body).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

}
