import { Component, OnInit } from '@angular/core';

import {RegistrationService} from '../../registration.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }


  reloadPage(){
    window.location.reload();
  }
  onSave(event) { 
   // ((document.getElementById("firstName") as HTMLInputElement).value);
    let ftitle = ((document.getElementById("titleid") as HTMLInputElement).value);
    let fName = ((document.getElementById("firstName") as HTMLInputElement).value);
    let lName = ((document.getElementById("lastName") as HTMLInputElement).value);
    let idob = ((document.getElementById("dob") as HTMLInputElement).value);
    let icontact = ((document.getElementById("contact") as HTMLInputElement).value);
    let iemail = ((document.getElementById("email") as HTMLInputElement).value);
    let ipassword = ((document.getElementById("password") as HTMLInputElement).value);
    let iconfirmPassword = ((document.getElementById("confirmPassword") as HTMLInputElement).value);

    /*
   
let isValid =true;
   if(icontact.length < 10){
    isValid=false;
   
  alert("minimum phone number length should be 10");
   }

   if(ipassword.length < 8){
    isValid = false;
     alert("password length is less than 8");
   }
   if(ipassword == iconfirmPassword ){
     console.log("password equal");
     
   }else{
    isValid = false;
     console.log("password not equal");
     alert("password not matching");
   }*/

   let patientObj = {
   title:ftitle,
   firstName:fName,
   lastName:lName,
   dateOfBirth:idob,
   contactNo:icontact,
   email:iemail,
   password:ipassword,
   confirmPassword:iconfirmPassword
   };

   console.log("patient OBJ "+JSON.stringify(patientObj));

 this.registrationService.registerPatient(patientObj).subscribe(data =>{
   alert("sign up successful");
  console.log("api called from component");
  console.log(data);
})



 }

}
