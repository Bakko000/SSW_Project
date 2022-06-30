import { Component } from '@angular/core';
import { DbService } from "./db.service";
import { MyTheatre } from './interfaccia/theatre';


export class Teatro implements MyTheatre {
  platea: Array<string>;
  palchi: Array<string>;

  constructor(platea: Array<string>, palchi: Array<string>) {
    this.platea=platea;
    this.palchi=palchi;
  }

}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  clicked: boolean = false;
  
  constructor(private db: DbService) {}

  Login(key: string) {
    const output = <HTMLElement>document.getElementById("output");
    this.db.checkKey(key)
    .subscribe({
      next: (content: any) => {
        if(content!=null) {
        output.innerHTML = content;
        } else {
          output.innerHTML = "Teatro vuoto";
        }
        console.log("Accesso al teatro");
      },
      error: err => { 
        console.error(err.error);
        output.innerHTML = "Il teatro selezionato non esiste"
      }
    });
  }
}
