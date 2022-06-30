import { Component, Input, OnInit, NgModule } from '@angular/core';
import { DbService } from "../db.service";


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

  filepalchi: string;
  fileplatea: string;

  CreateTheatre() {
    console.log("Creato un nuovo teatro con " + filepalchi + " file di palchi e " + fileplatea + " file di platea" );
  }

  ngOnInit() {
    console.log(this.clicked);
    
  }

}

