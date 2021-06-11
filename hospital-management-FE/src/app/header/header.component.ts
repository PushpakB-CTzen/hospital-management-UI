import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isLoggedin:any=false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  loggedin():boolean{
    return this.loginService.isloggedin();
  }

  logout(){
    this.loginService.logout();
  }

}
