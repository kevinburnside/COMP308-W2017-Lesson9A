import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class GamesService{
    private _baseURL = 'api';
    constructor(private _http: Http){

    }

    list():Observable<any>{
        return this._http
        .get(this._baseURL)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    }

    private handleError(error: )
}
