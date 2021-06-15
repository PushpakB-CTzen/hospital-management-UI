import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})

export class PatientRegistrationComponent implements OnInit {

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
  date = new Date();
  maxDate = (new Date().getFullYear()).toString() + "-0" + (new Date().getMonth() + 1).toString() + "-" + (new Date().getDate()).toString();


  ngOnInit(): void {
  }

  dateChange(event) {
    console.log(event);
  }
  reloadPage() {
    window.location.reload();
  }
  onSave(event) {
    let ftitle = ((document.getElementById("titleid") as HTMLInputElement).value);
    let fName = ((document.getElementById("firstName") as HTMLInputElement).value);
    let lName = ((document.getElementById("lastName") as HTMLInputElement).value);
    let idob = ((document.getElementById("dob") as HTMLInputElement).value);
    let icontact = ((document.getElementById("contact") as HTMLInputElement).value);
    let iemail = ((document.getElementById("email") as HTMLInputElement).value);
    let ipassword = ((document.getElementById("password") as HTMLInputElement).value);
    let iconfirmPassword = ((document.getElementById("confirmPassword") as HTMLInputElement).value);



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
      console.log("status is " + data.status);
      console.log("api called from component");
      console.log(data);
    })



  }

}
