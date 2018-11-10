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

  constructor() { }

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  ngOnInit() {
  }

}
