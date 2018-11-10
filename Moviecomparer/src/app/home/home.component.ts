import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }


  ngOnInit() {
  }

  rightClick(): void {
    this._router.navigate(['/signinhome']);
  }

  leftClick(): void {
    this._router.navigate(['/signuphome']);
  }


}