import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated = false;

  constructor(private http: Http) { }

  addUser(username: String, password: String) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('path', 'addUser');
    return this.http.post('http://localhost:8080', {
      params: {
        path: 'addUser',
        username: username,
        password: password
      }
    });
  }
}
