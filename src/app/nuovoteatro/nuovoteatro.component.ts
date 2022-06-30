import { Component, Input, OnInit } from '@angular/core';
import { DbService } from "../db.service";


@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  @Input() clicked: boolean;
  @Input() chiave: string;

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

  filepalchi: number;
  fileplatea: number;

  CreateTheatre() {
      if(!isNaN(this.filepalchi) && !isNaN(this.fileplatea)) {

        console.log("Creato un nuovo teatro di " + this.filepalchi + " file per i palchi e di " + this.fileplatea + " file per la platea");
      } else {
        console.log("Inserisci un numero");
      }
    
  } 

  ngOnInit() {
    console.log(this.clicked);
    
  }

}

