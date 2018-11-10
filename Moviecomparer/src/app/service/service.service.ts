import { SecretKeys } from '../secret/secret.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class MovieService {
    public apiKey: string;
    private readonly baseUrl: string;

    constructor (private _http: HttpClient, public _secret: SecretKeys){
        this.apiKey = this._secret.apiKey;
        this.baseUrl = "http://www.omdbapi.com/";
    }

    movieDetails(movieName: string): Observable <any> {
        const requestUrl = this.baseUrl + this.apiKey + movieName;
        console.log(requestUrl);
        return this._http.get(requestUrl);
        
    }
}