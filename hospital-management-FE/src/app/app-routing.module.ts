import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { LoggedinAuthGuard } from './guard/loggedin-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendNoteComponent } from './note/send-note/send-note.component';
import { RecievedNoteComponent } from './note/recieved-note/recieved-note.component';
import { SentNoteComponent } from './note/sent-note/sent-note.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AppoinementsComponent } from './appoinements/appoinements.component';



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedinAuthGuard] },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'patient', component: PatientRegistrationComponent },
  { path: 'employee', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'note/send', component: SendNoteComponent },
  { path: 'note/recieve', component: RecievedNoteComponent },
  { path: 'note/sent', component: SentNoteComponent },

  { path: 'inbox', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'inbox/appointment', component: AppoinementsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
