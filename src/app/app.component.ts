import { Component, VERSION } from '@angular/core';
import { DbService } from "./db.service";


export class Teatro {}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  constructor(private db: DbService) {}

  Login(key: string) {
    const resultcheck = <HTMLElement>document.getElementById("output");

    this.db.checkKey(key)
    .subscribe({
      next: (content: any) => resultcheck.innerHTML = content,
      error: err => { 
        console.error(err.error);
        resultcheck.innerHTML = "Il teatro selezionato non esiste"
      }
    });
  }


}
