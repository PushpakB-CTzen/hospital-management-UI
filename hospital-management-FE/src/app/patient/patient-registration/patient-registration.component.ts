import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})

export class PatientRegistrationComponent implements OnInit,AfterViewInit,AfterViewChecked {

  constructor(private registrationService: RegistrationService) {
    console.log(this.maxDate)
  }
 
  

  firstNameInput: any;
  lastNameInput: any;
  dob: any;
  contact: any;
  email: any;
  password: any;
  confirmPassword: any;
  iconfirmPassword: any;
  dpassword: any;
  confirmPassword1: any;
  date = new Date();
  maxDate = (new Date().getFullYear()).toString() + "-0" + (new Date().getMonth() + 1).toString() + "-" + (new Date().getDate()).toString();

  @ViewChild('customForm1') someInput!: ElementRef;
  @ViewChild('f') userFrm!: NgForm;

  ngOnInit(): void {
    
    console.log(this.userFrm)
    //this.someInput.markAsPristine();
    //this.userFrm.form.markAsPristine();
    //this.userFrm.form.markAsPristine();
    //this.dpassword= "hello";
    //this.someInput.nativeElement.value = "update input value";
    //((document.getElementById("titleid") as HTMLInputElement).value) = 1;
    //this.userFrm.form.markAsPristine();
  }

  ngAfterViewInit(): void {
    console.log("step2")
   // this.userFrm.form.markAsPristine();
    
  }

  ngAfterViewChecked(): void {
    console.log("step3")
    //this.userFrm.form.markAsPristine();
    
  }
  //this.frm.form.markAsPristine();

  

  dateChange(event) {
    console.log(event);
  }
  reloadPage() {
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
      title: ftitle,
      firstName: fName,
      lastName: lName,
      dateOfBirth: idob,
      contactNo: icontact,
      email: iemail,
      password: ipassword,
      confirmPassword: iconfirmPassword
    };

    console.log("patient OBJ " + JSON.stringify(patientObj));

    this.registrationService.registerPatient(patientObj).subscribe(data => {
      alert("sign up successful");
      console.log("api called from component");
      console.log(data);
    })



  }

}
