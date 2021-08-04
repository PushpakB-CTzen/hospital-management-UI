import { Injectable } from "@angular/core";

export class Diagnosis {

    constructor(
       public patientId:number,  
       public diagnosisCode:string,
       public diagnosisDescription:string,
       public diagnosisIsdeprecated:boolean){}
}

@Injectable({
    providedIn: "root",
  })
  export class DiagnosisAdapter {
    adapt(diagnosis: any): Diagnosis {
      return new Diagnosis(diagnosis.patientId,diagnosis.diagnosisCode,diagnosis.diagnosisDescription,diagnosis.diagnosisIsdeprecated);
    }
  }
