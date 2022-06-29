import { Component, VERSION } from '@angular/core';
import { DbService } from "./db.service";
import { MyTheatre } from './interfaccia/theatre';


export class Teatro implements MyTheatre {
  platea: Array<string>;
  palchi: Array<string>;

}

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
