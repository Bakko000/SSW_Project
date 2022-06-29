import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { DbService } from "../db.service";


@Component({
  selector: 'app-nuovoteatro',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  constructor(private db: DbService) {}

  newTheatre() {
    const output = <HTMLElement>document.getElementById("notifica");
    var newkey:string;
    this.db.newKey()
    .subscribe({
      next: (content: any) => newkey = content,
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

