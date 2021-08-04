import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile-model';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css']
})
export class PatientVisitComponent implements OnInit {

  public profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
