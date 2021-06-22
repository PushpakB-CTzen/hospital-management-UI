import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isLoggedin:any=false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.activatePageView();
    console.log("location is ::::: ");
    this.href = this.router.url;
    console.log(this.router.url);
  }

  loggedin(): boolean {
    console.log("logged in status");
    console.log(this.loginService.isloggedin());
    return this.loginService.isloggedin();
  }

  logout() {
    this.loginService.logout();
  }

  public href: string = "";
  inboxView = false;
  welcomePageView = true;

  activatePageView() {

    this.href = this.router.url;
    if (this.href == "/welcome") {
      this.welcomePageView = true;
      this.inboxView = false;
    }
    if (this.href == "/patient_registration") {
      this.welcomePageView = false;
      this.inboxView = true;
    }
    console.log(this.router.url);
  }

  isWelcomPage() {
    return this.welcomePageView;
  }

  isInboxPage() {
    return this.welcomePageView;
  }

}
