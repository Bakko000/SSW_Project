import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DbService {
   baseurl: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  
  constructor(private http: HttpClient) { }

  public getTheatre(key: string): Observable<string> {
    return this.http.get<string>(this.baseurl+"/get?key="+key);
  }
  public newKey(): Observable<string> {
    return this.http.get<string>(this.baseurl+"/new?secret=ssw2022");
  }
  public setTheatre(key, body): Observable<string> {
    return this.http.post<string>(this.baseurl+"/set?key="+key, body);
  }
}