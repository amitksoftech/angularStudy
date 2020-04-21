import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username = "amit";
  public login: Login;




  constructor(private router: Router) { }

  ngOnInit() {


    let flag = localStorage.getItem("loginflag");
    console.log(flag);

    if (flag === "true") {
      this.router.navigateByUrl('/dashboard1');

    }
  }

  onSubmit(loginForm) {
    console.log("onSubmit called");
    console.log(loginForm);

    //console.log(this.login);


    localStorage.setItem("username", loginForm.emailid);
    localStorage.setItem("loginflag", "true");
    
    this.router.navigate(['/dashboard1'], loginForm.emailid);

  }

}
