
import { MovieService } from './../service/service.service';
import { IMovieInterface } from './../Interface/moviedata.inteface';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-input-b',
  templateUrl: './input-b.component.html',
  styleUrls: ['./input-b.component.css']
})
export class InputBComponent implements OnInit {

  movieB: string = '';
  responseData:IMovieInterface;
  emptyArr: Array<object> = [];
  ratingsArr: Array<object> = [];
  withoutRatingsArr: Array<object> = [];
  finalDataArr: Array<object> = [];
  

  constructor(private _service: MovieService) { }

  ngOnInit() {
  }

  movieSearchB() {
    this._service.movieDetails(this.movieB)
    .subscribe((response)=>{
      this.responseData = response;
      console.log(this.responseData);
      //storing data in a new array
      this.iterationOfData(this.responseData);
      //sepearating nested arrays from non nested arrays
      this.looping(this.emptyArr);
      console.log(this.emptyArr);
      //concating both array
      this.finalDataArr = this.withoutRatingsArr.concat(this.ratingsArr);
      console.log(this.finalDataArr);
    })
  }

iterationOfData(data){
  this.emptyArr = [];
    return Object.keys(data).map((current)=>{
     this.emptyArr.push({Source: current, Value: data[current]})
    }); 
  }

  looping(arr){
   this.ratingsArr = [];
   this.withoutRatingsArr = [];
   return  arr.map((current, index)=>{
      if (index === 14){
        current.Value.map((current)=>{
          this.ratingsArr.push(current);
        })
      } else {
        this.withoutRatingsArr.push(current);
      }
    })
  }

}
