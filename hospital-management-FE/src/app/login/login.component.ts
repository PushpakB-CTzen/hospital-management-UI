import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


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




  //@ViewChild('credentials') loginForm : NgForm;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    //console.log(form.value);
    let resp=this.loginService.login(form.value);
    resp.subscribe(
      data=>{
        if(LoginStatus.success === data){
          this.router.navigateByUrl("/welcome")
        }else{
          this.router.navigate(["/login"]);
        }
        //console.log(data.toString())
      }
    )
  }

  // public getAccessToken(authRequest:any){
  //   //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.ub36cIRk3FO03sR3TTRlkxfHJYjunqnzQ3agv1Zm8x0
  //   let resp=this.loginService.generateToken(authRequest);
  //   resp.subscribe(data=>console.log(data));
  // }

}
