import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Diagnosis, DiagnosisAdapter } from 'src/app/models/diagnosis-model';

@Injectable({
  providedIn: 'root'
})
export class ViewApiService {
  
  constructor(private httpClient:HttpClient,private diagnosisAdapter:DiagnosisAdapter) { }
 
  private diagnosisUrl='http://localhost:8090';


  getAllDiagnosisForPhysian(): Observable<Diagnosis[]> {
    return this.httpClient.get<Diagnosis[]>(this.diagnosisUrl+'/savediagnosis/getall',{})
    .pipe(
      map((data: Diagnosis[]) => {
        return data.map((item) => this.diagnosisAdapter.adapt(item));
      }), catchError(error => {
        return throwError("something went wrong.")
      })
    );
  }
  getAllDiagnosisByPatient(id): Observable<Diagnosis[]> {
    return this.httpClient.get<Diagnosis[]>(this.diagnosisUrl+'/savediagnosis/patients/'+id,{})
    .pipe(
      map((data: Diagnosis[]) => {
        return data.map((item) => this.diagnosisAdapter.adapt(item));
      }), catchError(error => {
        return throwError("something went wrong.")
      })
    );
  }
  
}
