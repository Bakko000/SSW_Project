import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';


@Injectable({
  providedIn: 'root'
})

export class DbService {
   currurl: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  
  constructor(private http: HttpClient) { }

  public checkKey(key: string): Observable<string> {
    return this.http.get<string>(this.currurl+"/get?key="+key);
  }
  
}