import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {User} from "../model/model.user";
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  
  constructor(public http: Http) { }

  public logIn(user: User){

    let headers = new Headers();
    headers.append('Accept', 'application/json')
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);

    let options = new RequestOptions();
    options.headers = headers;
    return this.http.get(AppComponent.API_URL + '/account/login', options)
      .map((response: Response) => {
      let user = response.json().principal;
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.isLoggedIn = true;
      }
    });
  }

  logOut() {
    return this.http.post(AppComponent.API_URL + '/logout', {})
      .map((response: Response) => {
        localStorage.removeItem('currentUser');
      });
  }

  isAuth() {
    return this.isLoggedIn;
  }
}