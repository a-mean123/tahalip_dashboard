import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  };

  constructor(private _auth: DataService,
              private _router: Router) { }

  ngOnInit() {
  }


  alert = false;

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/']);
      },
      err => {
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 3000);
      }
    )
  }

}
