// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-auth-page',
//   templateUrl: './auth-page.component.html',
//   styleUrls: ['./auth-page.component.css']
// })
// export class AuthPageComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/model.user";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthPageComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.user)
      .subscribe(data => {
        this.router.navigate(['/profile']);
        }, err => {
          this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}