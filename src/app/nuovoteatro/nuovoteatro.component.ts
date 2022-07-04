import { Component, Input, OnInit } from '@angular/core';
import { DbService } from "../db.service";
import { Teatro } from '../app.component';

@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  @Input() clicked: boolean;
  @Input() chiave: string;
  @Input() newtheatre: boolean = false;

  constructor(private db: DbService) {}
  
  public newTheatre() {
    this.clicked = true;
    this.newtheatre = true;
    console.log(this.newtheatre);
    console.log(this.clicked);
    const output = <HTMLElement>document.getElementById("output");
    this.db.newKey()
    .subscribe({
      next: (content: any) => { 
        console.log("Creato il nuovo teatro con chiave: " + content);
        console.log(this.clicked);
        this.chiave = content;
      },
      error: err => { 
        console.error(err.error);
        console.log(this.db.baseurl+"/new?secret=ssw2022");
        output.innerHTML = "Il teatro selezionato non esiste";
      } 
    });
  }

  postiplatea: string;
  postipalchi: string;
  filepalchi: number = 4;
  fileplatea: number = 7;

   public CreateTheatre() {
      console.log(this.newtheatre);
      this.clicked = false;    
      var NuovoTeatro = new Teatro([],[],parseInt(this.postiplatea), this.fileplatea, parseInt(this.postipalchi), this.filepalchi);
       console.log(NuovoTeatro);
  } 
  ngOnInit() {}
}

