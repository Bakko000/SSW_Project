import { Injectable } from '@angular/core';

@Injectable()

export class DbService {
  const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  var key: string;
  
  constructor(private http: HttpClient) { }

  public getData(CityName: string): Observable<string> {
    return this.http.get<string>(this.URL+CityName);
  }
}