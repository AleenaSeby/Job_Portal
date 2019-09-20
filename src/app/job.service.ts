import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IJob } from './job';
import { ISample } from './Sample';
import "rxjs/Rx";
import { Http, Response } from "@angular/http";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class JobService {
  // private _url : string = "https://jobsqared.herokuapp.com/jobs";
  //private _url: string = "https://reqres.in/api/users?page=2";
  //private _url: string = "https://jsonplaceholder.typicode.com/posts";
  private _url: string = "https://nut-case.s3.amazonaws.com/jobs.json";
  constructor(private http: Http) { }

  //   getJob() : Observable<ISample[]>{
  //     return this.http.get<ISample[]>(this._url)
  //       .catch(this.errorHandler);
  // }
  getJob(): Observable<IJob[]> {
    return this.http
      .get(this._url)
      .map((response: Response) => {
        console.log("-----result------", <IJob[]>response.json().data)
        return <IJob[]>response.json().data;
      })
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
