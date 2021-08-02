import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ApicallService } from 'src/app/apicall.service';
import { Procedure, ProcedureAdapter } from 'src/app/models/procedure-model';
import { ProcedureApiService } from '../procedure-api.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  isDepricated;
  index;
  procedure:any;
  procedures:Procedure[];
  procedures1:any=[];
  constructor(private apiService:ApicallService,private procedureApiService:ProcedureApiService,private procedureAdapter:ProcedureAdapter) { }

  ngOnInit(): void {
    console.log("NG on init")
  }

  resultCodeFormatValue(value: any) {            
    return value.procedureCode;
  } 
  
  inputCodeFormatValue(value: any)   {
    if(value.procedureCode){
      return value.procedureCode;}
    return value;
  }
  
  searchCode= (text$: Observable<string>) =>  text$.pipe( 
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    switchMap((searchText)=>this.procedureApiService.getAllProceduresByCode(searchText)),
  );

  resultDescriptionFormatValue(value: any) {            
    return value.procedureDescription;
  } 
  
inputDescriptionFormatValue(value: any){
    if(value.procedureDescription)
      return value.procedureDescription;
    return value;
  }
  
searchDescription= (text$: Observable<string>) =>  text$.pipe( 
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 3),
    switchMap((searchText)=>this.procedureApiService.getAllProceduresByDescription(searchText))
  )

  addProcedure(){
    this.procedure=this.procedures
    this.procedure.patientId=1;
    this.procedure.procedureIsdeprecated=this.isDepricated;
    this.procedures1.push(this.procedure);
    this.index=this.procedures1.length;
    console.log(this.index)
  }

  removeProcedure(index){
    console.log(index)
    this.procedures1.splice(index,1);
    }

}
