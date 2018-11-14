import { SigninFormComponent } from './../signin-form/signin-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin-home',
  templateUrl: './signin-home.component.html',
  styleUrls: ['./signin-home.component.css']
})
export class SignInHomeComponent implements OnInit {

  @ViewChild(SigninFormComponent) signIn: SigninFormComponent

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  leftClick(): void {
    this._router.navigate(['/home']);
  }
  callingSubmitButton(){
    this.signIn.submitButton();
  }
}
