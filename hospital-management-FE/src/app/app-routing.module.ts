import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { LoggedinAuthGuard } from './guard/loggedin-auth.guard';

import { SendNoteComponent } from './note/send-note/send-note.component';
import { RecievedNoteComponent } from './note/recieved-note/recieved-note.component';
import { SentNoteComponent } from './note/sent-note/sent-note.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppoinementsComponent } from './appoinements/appoinements.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PhysianAppointmentComponent } from './physician-appointment/physician-appointment.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedinAuthGuard] },
  { path: 'patient', component: PatientRegistrationComponent },
  { path: 'employee', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'note/send', component: SendNoteComponent },
  { path: 'note/recieve', component: RecievedNoteComponent },
  { path: 'note/sent', component: SentNoteComponent },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'inbox/appointment', component: AppoinementsComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  {path:'appointment/add',component:PhysianAppointmentComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
