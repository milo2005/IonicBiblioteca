import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Libro } from '../models/libro';
import { URL } from '../app/app.config';

@Injectable()
export class LibroService {

  constructor(public http: Http) { }

  all():Observable<Libro[]>{
    return this.http.get(URL+"/books").map( response =>{
      return response.json();
    }).catch(err=>{
      return Observable.throw(err);
    });
  }

  add(libro:Libro):Observable<{success:boolean}>{
    return this.http.post(URL+"/books", libro).map( response=>{
      return response.json();
    }).catch(err=>{
      return Observable.throw(err);
    });
  }

}
