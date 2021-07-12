import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

import { ForgetPasswordService } from '../forget-password.service';
import { ToasterNotificationService } from '../toaster-notification.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email :string ='';
  message :string = '';
  load : boolean = false;
  showbutton : boolean = true;
  showgobutton : boolean = false;
  constructor(private forgetPasswordService : ForgetPasswordService,
    private notifyService : ToasterNotificationService) { }

  ngOnInit(): void {
  }

 

  sendPassword(email:any){
    this.load = true;
    this.forgetPasswordService.getPassword(email).subscribe(
      data => {
         this.message = data;
         this.notifyService.showSuccess(this.message, "Done!")
         this.load = false;
         this.showbutton = false;
         this.showgobutton = true;
      },error => {
        this.notifyService.showError("Email Sending Failed", "Error")
        //console.log(error);   
      } )
  }

}