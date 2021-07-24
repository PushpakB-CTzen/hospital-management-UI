import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-appoinements',
  templateUrl: './appoinements.component.html',
  styleUrls: ['./appoinements.component.css']
})
export class AppoinementsComponent implements OnInit {

  constructor(private apiService: RegistrationService) { }

  weekklyAppointmentList: any;
  hasAppointmentsToday: Boolean = false;
  role: any;

  ngOnInit(): void {

    this.role = sessionStorage.getItem("role");
    if (this.role == 'A') {
      this.role = "ADMIN";
    } else if (this.role == 'D') {
      this.role = "PHYSICIAN";
    } else if (this.role == 'N') {
      this.role = "NURSE";
    } else {
      this.role = "PATIENT";
    }

    this.apiService.getWeeklyAppointments().subscribe(data => {
      console.log("status is " + data.status);
      console.log("weekly apointments api called");
      for (var val of data) {
        this.hasAppointmentsToday = true;
        if (val["editHistory"] == null || val["editHistory"] == undefined) {
          val["editHistory"] = "NA";
        }
      }
      this.weekklyAppointmentList = data;
      console.log(this.weekklyAppointmentList);

    })
  }


}
