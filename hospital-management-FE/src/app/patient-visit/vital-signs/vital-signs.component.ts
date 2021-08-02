import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ApicallService } from 'src/app/apicall.service';
import { Profile } from 'src/app/models/profile-model';
import { VitalSign, VitalSignAdapter } from 'src/app/models/vital-signs-model';
import { ToasterNotificationService } from 'src/app/toaster-notification.service';
import { VitalSignApiService } from '../vital-sign-api.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {
  public profile: Profile;
  public vitalSigns:VitalSign;
  constructor(private apiService:ApicallService,private vitalSignApiService:VitalSignApiService,private notifyService : ToasterNotificationService) { }

  ngOnInit(): void {
  }

  resultFullNameValue(value: any) {            
    return value.firstName +' '+value.lastName;
  } 
  
  inputFullNameValue(value: any)   {
    if(value.firstName)
      return value.firstName +' '+value.lastName
    return value;
  }
  
  search= (text$: Observable<string>) =>  text$.pipe( 
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    switchMap((searchText)=>this.apiService.getAllEmployeeByName(searchText)),
  );
                
  onSubmit(vitalForm:NgForm){
    const vitals=vitalForm.value;
    //Add Pateient Id
    this.vitalSigns=new VitalSign(2,vitals.height,vitals.weight,vitals.bloodPressure,vitals.bodyTemperature,vitals.respirationRate);
    this.vitalSignApiService.saveVitalSigns(this.vitalSigns).subscribe(
        data => {​​​​ 
              this.notifyService.showSuccess(data,"Vital Signs Added.");
              //Reset form
            }​​​​,  
        error => {​​​​
                this.notifyService.showError(error,"Failure in adding Vital Signs.");
                //Reset form
            }​​​​
     );
  }
}
