import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthGuard } from './guard/auth.guard';

import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SendNoteComponent } from './note/send-note/send-note.component';
import { RecievedNoteComponent } from './note/recieved-note/recieved-note.component';
import { SentNoteComponent } from './note/sent-note/sent-note.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    ChangePasswordComponent,
    PatientRegistrationComponent,
    RegistrationComponent,
    DashboardComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    SidebarComponent,
    SendNoteComponent,
    RecievedNoteComponent,
    SentNoteComponent,
   
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
