import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';


const routes: Routes = [
  {path:'',redirectTo:'/welcome', pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'change-password',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
