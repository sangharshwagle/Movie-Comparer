import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-home',
  templateUrl: './signup-home.component.html',
  styleUrls: ['./signup-home.component.css']
})
export class SignupHomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  rightClick(): void{
    this._router.navigate(['/home']);
  }
}
