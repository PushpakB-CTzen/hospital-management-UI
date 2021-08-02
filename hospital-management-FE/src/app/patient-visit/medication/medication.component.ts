import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ApicallService } from 'src/app/apicall.service';
import { Profile } from 'src/app/models/profile-model';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  medications:any[];

  constructor(private apiService:ApicallService) { }

  ngOnInit(): void {
  }

  public profile: Profile;

resultFormatBandListValue(value: any) {            
  return value.firstName +' '+value.lastName;
} 

inputFormatBandListValue(value: any)   {
  if(value.firstName)
    return value.firstName +' '+value.lastName
  return value;
}

search= (text$: Observable<string>) =>  text$.pipe( 
  debounceTime(200),
  distinctUntilChanged(),
  filter(term => term.length >= 2),
  switchMap((searchText)=>this.apiService.getAllEmployeeByName(searchText)),
)
}
