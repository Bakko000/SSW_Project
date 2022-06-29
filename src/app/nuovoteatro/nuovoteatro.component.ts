import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DbService } from "../db.service";


@Component({
  selector: 'app-nuovoteatro',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  constructor(private db: DbService) {}

  newTheatre() {
    const output = <HTMLElement>document.getElementById("output");
    this.db.newKey()
    .subscribe({
      next: (content: any) => { 
        output.innerHTML="Creato il nuovo teatro con chiave:" + content;
      },
      error: err => { 
        console.error(err.error);
        console.log(this.db.baseurl+"/new?secret=ssw2022");
        output.innerHTML = "Il teatro selezionato non esiste";
      }
    });
  }

  ngOnInit() {
  }

}

