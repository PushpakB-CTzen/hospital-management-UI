import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import JwtClientService from '../service/jwt-client.service';
import { LoginService } from './login.service';
import { ToasterNotificationService } from '../toaster-notification.service';
import { tokenData } from '../payload';


enum LoginStatus {
  success="LOGIN_SUCCESS",
  incorrectEmail="INCORRECT_EMAIL",
  incorrectPassword="INCORRECT_PASSWORD"
  
  }
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isPasswordUpdate:boolean = false;
  tokendata :any
  role:any;
  showPassword : boolean = false;
  count : number = 0;
  name : string;
  constructor(private jwtService:JwtClientService,
              private loginService:LoginService,
              private router:Router,
              private notifyService : ToasterNotificationService) { }

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
          this.tokendata = this.loginService.getDecodedAccessToken<tokenData>(jwtToken);
          this.isPasswordUpdate = this.tokendata.isUpdate;
          this.role = this.tokendata.role;
          this.name = this.tokendata.name;
          localStorage.setItem("jwtToken",jwtToken);
          sessionStorage.setItem("username",this.name);
          sessionStorage.setItem("role",this.role);
          if(this.role == "D" || this.role == "N"){
            if(this.isPasswordUpdate){
              this.router.navigate(["/inbox/appointment"])
            }else {
              this.router.navigate(["/changepassword"])
            }
          } else if(this.role == "A"){
            this.router.navigate(["/welcome"])
          }else {
            this.router.navigate(["/patient-details"])
          }   
        }

      }, (error) => {
        this.count = this.count + 1;
        console.log(this.count);
        if(this.count >= 3){
            this.notifyService.showError("3 attempts failed account has been blocked","Account Blocked !");
            form.reset();
        }else {
          this.notifyService.showError("Unauthorised User","Error");
        }
      },
    )
  }
}

