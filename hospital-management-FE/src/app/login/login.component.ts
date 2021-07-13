import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import JwtClientService from '../service/jwt-client.service';
import { LoginService } from './login.service';
import jwt_decode from 'jwt-decode';
import { ToasterNotificationService } from '../toaster-notification.service';


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
  //@ViewChild('credentials') loginForm : NgForm;
  constructor(private jwtService:JwtClientService,
              private loginService:LoginService,
              private router:Router,
              private notifyService : ToasterNotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    let resp=this.jwtService.generateToken(form.value);

    resp.subscribe(
      response=>{
        if(response!='' && response != null){
          console.log(response)
          let jwtToken:string=JSON.stringify(response);
          console.log(response)
          this.tokendata = this.getDecodedAccessToken<tokenData>(jwtToken);
          this.isPasswordUpdate = this.tokendata.isUpdate;
          this.role = this.tokendata.role
          localStorage.setItem("jwtToken",jwtToken);
          if(this.role == "D" || this.role == "N"){
            if(this.isPasswordUpdate){
              this.router.navigate(["/employee"])
            }else {
              this.router.navigate(["/changepassword"])
            }
          }else {
            this.router.navigate(["/patient"])
          }
          
          
        }
       
      }, (error) => {
        this.count = this.count + 1;
        console.log(this.count);
        if(this.count >= 3){
            this.notifyService.showError("3 attempts failed account has been blocked","Account Blocked !");
            //location.reload();
            form.reset();
        }else {
          this.notifyService.showError("Unauthorised User","Error");
        }
         
        // 
      },
    
      
    )
  }

  getDecodedAccessToken<T>(token: string): any {
    try{
        return jwt_decode<T>(token);
    }
    catch(Error){
        return null;
    }
  }



}
interface tokenData {
  sub : string,
  role:string,
  exp:number,
  iat:number,
  isUpdate : boolean,
  id : number
}
