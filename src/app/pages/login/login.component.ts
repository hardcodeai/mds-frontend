import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormDetails = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    if (this.auth.isAuthenticated()) {
      this.route.navigateByUrl('/dashboard')
    }
  }
  //sending the user form details from here
  submitLogin() {
    this.auth.loginUser(this.loginFormDetails).subscribe(e => {
      if (e === 'USER_LOGGED_IN') {
        this.route.navigateByUrl('/dashboard');
      }
      console.log(e);
    })
  }
}
