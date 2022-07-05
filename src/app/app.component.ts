import { Component, VERSION } from '@angular/core';
import { DbService } from "./db.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  $(x) {
    return document.getElementById(x);
  }


  constructor(private db: DbService) {}
  Login(key: string) {
    this.db.checkKey(key)
  }




}
