import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  registerPatient(patientInfo: any): Observable<any> {
    this.baseURL = "http://localhost:8080/";
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': ' Origin, Content-Type, X-Auth-Token'
    }
    const body = JSON.stringify(patientInfo);
    console.log("Inside parent api calling method");
    console.log(body)
    return this.http.post(this.baseURL + 'user/patient', body, { 'headers': headers })
  }

  getWeeklyAppointments(): Observable<any> {
    this.baseURL = "http://localhost:8081/";
    return this.http.get(this.baseURL + 'appointment/weekly');
  }
}