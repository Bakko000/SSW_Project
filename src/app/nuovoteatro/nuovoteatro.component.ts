import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { DbService } from "../db.service";
import { Teatro } from "../app.component"


@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  @Input() clicked: boolean;

  constructor(private db: DbService) {}

  newTheatre() {
    this.clicked = true;
    const output = <HTMLElement>document.getElementById("output");
    this.db.newKey()
    .subscribe({
      next: (content: any) => { 
        console.log("Creato il nuovo teatro con chiave: " + content);
        console.log(this.clicked);
      },
      error: err => { 
        console.error(err.error);
        console.log(this.db.baseurl+"/new?secret=ssw2022");
        output.innerHTML = "Il teatro selezionato non esiste";
      }
    });
  }

  CreateTheatre() {
    

   
  }

  ngOnInit() {
    console.log(this.clicked);
    
  }

}

