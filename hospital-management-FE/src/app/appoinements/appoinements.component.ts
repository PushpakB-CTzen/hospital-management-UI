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

  ngOnInit(): void {
    this.apiService.getWeeklyAppointments().subscribe(data => {
      console.log("status is " + data.status);
      console.log("weekly apointments api called");
      for (var val of data) {
        if (val["editHistory"] == null || val["editHistory"] == undefined) {
          val["editHistory"] = "NA";
        }
      }
      this.weekklyAppointmentList = data;
      console.log(this.weekklyAppointmentList);

    })
  }


}
