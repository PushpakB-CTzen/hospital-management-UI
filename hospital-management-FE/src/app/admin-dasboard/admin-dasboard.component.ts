import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

import { LoginService } from '../login/login.service';
import { PatientManageService } from '../patient-manage.service';


@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  

  doughnutChartLabels: Label[] = ['Blocked', 'Active'];
    doughnutChartData: MultiDataSet = [
      [10,  3]
    ];
    doughnutChartType: ChartType = 'doughnut';

    barChartOptions: ChartOptions = {
      responsive: true,
    };
    barChartLabels: Label[] = ['Employee', 'Patient'];
    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];
  
    barChartData: ChartDataSets[] = [
      { data: [22,12,10,80], backgroundColor :['rgb(255, 99, 132)','rgb(54, 162, 235)'], label: 'Users' }
    ];
    
  
 
  
  constructor(private loginService:LoginService,
    ) { }

  ngOnInit(): void {
    
  }


  loggedin():boolean{
    console.log("in welcome loggedin"+this.loginService.isloggedin())
    return this.loginService.isloggedin();
  }
}
