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
  
  constructor() { }

  checkKey(key: string) {
    ajax({
      method: 'GET',
      url: this.currurl + '/get?key=' + key,
      crossDomain: true,
    })
    .subscribe({
      next: (res: AjaxResponse<any>) => {
        document.getElementById('output').innerHTML = res.response;
      },
      error: (err: AjaxError) => { console.error(err.response); document.getElementById('output').innerHTML = "Il teatro selezionato non esiste";
      }
    });
  }
  
}