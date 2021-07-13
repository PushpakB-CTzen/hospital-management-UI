import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import JwtClientService from '../service/jwt-client.service';
import { LoginService } from './login.service';


enum LoginStatus {
  success = "LOGIN_SUCCESS",
  incorrectEmail = "INCORRECT_EMAIL",
  incorrectPassword = "INCORRECT_PASSWORD"

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@ViewChild('credentials') loginForm : NgForm;
  constructor(private jwtService: JwtClientService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let resp = this.jwtService.generateToken(form.value);

    resp.subscribe(
      response => {
        if (response != '' && response != null) {
          console.log(response)
          let jwtToken: string = JSON.stringify(response);
          console.log(response)
          localStorage.setItem("jwtToken", jwtToken);
          this.router.navigate(["/employee"])
        }

      }, (error) => {
        console.log(error);
        location.reload();
      },


    )
  }



}
