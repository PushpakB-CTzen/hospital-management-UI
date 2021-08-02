import { Injectable } from "@angular/core";

export class Procedure {

    constructor(
       public patientId:number,  
       public height:number,
       public weight:number,
       public bloodPressure:string,
       public bodyTemperature:string,
       public respirationRate:string){}

    
}

@Injectable({
    providedIn: "root",
  })
  export class ProcedureAdapter {
    adapt(procedure: any): Procedure {
      return new Procedure(procedure.patientId,procedure.height,procedure.weight,procedure.bloodPressure,procedure.bodyTemperature,procedure.respirationRate);
    }
  }
