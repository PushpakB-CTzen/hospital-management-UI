import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { LoggedinAuthGuard } from './guard/loggedin-auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'/welcome', pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent,canActivate:[LoggedinAuthGuard]},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'patient',component:PatientRegistrationComponent,canActivate:[AuthGuard]},
  {path:'employee',component:RegistrationComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
