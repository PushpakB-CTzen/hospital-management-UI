import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Profile, ProfileAdapter } from './models/profile-model';
import { Note } from './note/note-model';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {



  constructor(private httpClient: HttpClient, private adapter: ProfileAdapter) { }

  getAllEmployeeByName(name: String): Observable<Profile[]> {
    let token = localStorage.getItem("jwtToken");
    const token1 = token?.slice(1, token.length - 1);
    let tokenStr = 'Bearer ' + token1;

    console.log(tokenStr)
    const headers = new HttpHeaders().set("Authorization", tokenStr)
    return this.httpClient.post<Profile[]>("http://localhost:8080/user/employee/name", name, { headers })
      .pipe(
        map((data: Profile[]) => {
          return data.map((item) => this.adapter.adapt(item));
        }), catchError(error => {
          return throwError("something went wrong.")
        })
      );

  }

  sendNote(noteReq: any): Observable<string> {
    let token = localStorage.getItem("jwtToken");
    const token1 = token?.slice(1, token.length - 1);
    let tokenStr = 'Bearer ' + token1;
    console.log(tokenStr)
    const headers = new HttpHeaders().set("Authorization", tokenStr)
    return this.httpClient.post<string>("http://localhost:8081/note/send-note", noteReq, { headers });

  }


}
