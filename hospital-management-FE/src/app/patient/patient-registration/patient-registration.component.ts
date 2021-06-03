import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event) { 
   // ((document.getElementById("firstName") as HTMLInputElement).value);
    let fName = ((document.getElementById("firstName") as HTMLInputElement).value);
    let lName = ((document.getElementById("lastName") as HTMLInputElement).value);
    let idob = ((document.getElementById("dob") as HTMLInputElement).value);
    let icontact = ((document.getElementById("contact") as HTMLInputElement).value);
    let iemail = ((document.getElementById("email") as HTMLInputElement).value);
    let ipassword = ((document.getElementById("password") as HTMLInputElement).value);
    let iconfirmPassword = ((document.getElementById("confirmPassword") as HTMLInputElement).value);

   /*console.log("firstName "+fName);
   console.log("lastname "+lName);
   console.log("dob "+idob);
   console.log("contact "+icontact);
   console.log("email "+iemail);
   console.log("password "+ipassword);
   console.log("confirmPassword "+iconfirmPassword);*/

   if(icontact.length < 10){
     alert("minimum phone number length should be 10");
   }

   if(ipassword.length < 8){
     alert("password length is less than 8");
   }
   if(ipassword == iconfirmPassword ){
     console.log("password equal");
     
   }else{
     console.log("password not equal");
     alert("password not matching");
   }

   let patientObj = {
   firstName:fName,
   lastName:lName,
   dob:idob,
   contact:icontact,
   email:iemail,
   password:ipassword,
   confirmPassword:iconfirmPassword
   };

   console.log("patient OBJ "+JSON.stringify(patientObj));
  // console.log(event);
 }

}
