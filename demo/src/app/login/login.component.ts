import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
private username = "amit"; 
public login:Login;



  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm)
  {

console.log("onSubmit called");
console.log(loginForm);

//console.log(this.login);

  }

}
