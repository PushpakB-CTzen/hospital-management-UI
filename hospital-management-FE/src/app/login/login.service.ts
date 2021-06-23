import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  constructor() { }

  // public generateToken(request:any){
  //   return this.http.post("http://localhost:8081/authenticate",request,{responseType:'text' as 'json'});
  // }

  // public login(request:any){
  //  return this.http
  //             .post("http://localhost:8080/user/patient/login",request,{responseType:'text' as 'json'});
  // }

  isloggedin() {
    let token = localStorage.getItem("jwtToken");
this.decodeJwtToken();
    if (token != '' && token != null && token != undefined) {
      return true
    } else {
      return false
    }

  }

  decodeJwtToken() {
    let token: any = localStorage.getItem("jwtToken");
    const helper = new JwtHelperService();
    new JwtHelperService().decodeToken(token);
    const decodedToken = helper.decodeToken(token);
    console.log("deode token " + JSON.stringify(decodedToken));
    //var decoded = jwt_decode(token); 
  }

  logout() {
    localStorage.removeItem("jwtToken")

    //return true;
  }
}
