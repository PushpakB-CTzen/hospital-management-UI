import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  // public generateToken(request:any){
  //   return this.http.post("http://localhost:8081/authenticate",request,{responseType:'text' as 'json'});
  // }

  // public login(request:any){
  //  return this.http
  //             .post("http://localhost:8080/user/patient/login",request,{responseType:'text' as 'json'});
  // }

  isloggedin(){
    let token=localStorage.getItem("jwtToken");
    if(token!='' && token != null && token != undefined){
      return true
    }else{
      return false
    }

  }

  logout(){
    localStorage.removeItem("jwtToken")

    //return true;
  }
}
