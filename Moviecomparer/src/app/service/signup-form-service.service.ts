import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class SignUpService {

    constructor (private _http: HttpClient){

    }

    addSignUp(data){
        this._http.post("http://localhost:3000/api/title", data).subscribe((response)=>{
            console.log(response);
        })
    }
}