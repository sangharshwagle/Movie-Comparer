import { SignUpService } from '../service/signup-form-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signUpForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl (''),
    rePassword: new FormControl('')
  });

  constructor(private _SignupService: SignUpService) { 

  }
  ngOnInit() {
  }
  submitButton(){
    const data = {
      username: this.signUpForm.get('userName').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      rePassword: this.signUpForm.get('rePassword').value,
    };
    this._SignupService.addSignUp(data);
    this.signUpForm.reset();
  }

}
