import { SignUpService } from './service/signup-form-service.service';
import { SecretKeys } from './secret/secret.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from './service/service.service';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './Routes/app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SigninFormComponent } from './signin-form/signin-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInHomeComponent } from './signin-home/signin-home.component';
import { MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { InputAComponent } from './input-a/input-a.component';
import { InputBComponent } from './input-b/input-b.component';


import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PracticeComponent } from './practice/practice.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SigninFormComponent,
    SignInHomeComponent,
    HomeComponent,
    SignupHomeComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    InputAComponent,
    InputBComponent,
    MainComponent,
    NavbarComponent,
    PracticeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatListModule

  ],
  providers: [MovieService, SecretKeys, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
