import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { SignInFormValidators } from './signin-form.validators';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      SignInFormValidators.spaceNotAllowed 
    ]),
    password: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }
  submitButton(){
    console.log(`this button was clicked`);
  }

}
