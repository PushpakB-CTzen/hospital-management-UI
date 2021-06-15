import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
   // this.loggedin();
  }

  loggedin():boolean{
    console.log("in welcome loggedin"+this.loginService.isloggedin())
    return this.loginService.isloggedin();
  }

}
