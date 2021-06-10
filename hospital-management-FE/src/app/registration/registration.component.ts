import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeRole(e) {
    //alert(e.target.value);
  }

  onSave(event) { 
     let title = ((document.getElementById("title") as HTMLInputElement).value);
     let fName = ((document.getElementById("firstName") as HTMLInputElement).value);
     let lName = ((document.getElementById("lastName") as HTMLInputElement).value);     
     let iemail = ((document.getElementById("email") as HTMLInputElement).value);
     let icontact = ((document.getElementById("contact") as HTMLInputElement).value);
     let idob = ((document.getElementById("dob") as HTMLInputElement).value);
     let role1 = (document.getElementById("Admin") as HTMLInputElement); 
     let role2 = (document.getElementById("Physician") as HTMLInputElement);
     let role3 = (document.getElementById("Nurse") as HTMLInputElement);
     let irole = "off";

    if(role1.checked){
      irole = role1.value;
     }else if(role2.checked){
      irole = role2.value;
    }else if(role3.checked){
      irole = role3.value;
    }
/*
     if(fName.length == 0){
      alert("First name cannot be empty");
    }else if(fName.length < 2){
      alert("Please don’t use abbreviations");
    }

    if(lName.length == 0){
      alert("Last name cannot be empty");
    }else if(lName.length < 2){
      alert("Please don’t use abbreviations");
    }
 
    if(icontact.length < 10){
      alert("Minimum length of Contact should be 10");
    }

    if(irole.startsWith("off")){
      alert("Please select a Role");
    }*/

  
    let empObj = {
      title:title,
    firstName:fName,
    lastName:lName,
    dob:idob,
    contact:icontact,
    email:iemail,
    role:irole
    };
 
    alert("Employee Object :: "+JSON.stringify(empObj));  
  }  

}
