import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../model/model.user";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegPageComponent implements OnInit {

  // username: String = '';
  // password: String = '';
  // isAuthenticated = false;

  // constructor(private router: Router, private userService: UserService, private http: Http) { }

  // ngOnInit() {
    
  // }

  // // addUser() {
  // //   this.userService
  // //   .addUser(this.username, this.password)
  // //   .subscribe((json) => {
  // //     console.log(json);
  // //   });
  // //   console.log(this.username);
  // //   console.log(this.password);
  // //   this.username = '';
  // //   this.password = '';
  // //   //this.router.navigate(['/']);
  // // }

  // login(username: string, password: string) {
  //   const headers = new Headers();
  //   const creds = 'username=' + username + '&password=' + password;
  //  // headers.append('Content-Type', 'application/json');
  //   headers.append('Authorization', 'Basic ' +
  //     btoa(username+':'+password));
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   return new Promise((resolve) => {
  //     this.http.post('http://localhost:8080/registration', creds, { headers: headers }).subscribe((data) => {
  //       console.log(creds);
  //       console.log(data);
  //       // if (data.json().success) {
  //       //   // window.localStorage.setItem('auth_key', data.json().token);
  //       //   // this.userId = data.json().userId;
  //       //   this.isAuthenticated = true;
  //       // }
  //       resolve(this.isAuthenticated);
  //     });
  //   });
  // }
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.accountService.createAccount(this.user).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
