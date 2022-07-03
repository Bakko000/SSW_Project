import { Component, Input, OnInit } from '@angular/core';
import { DbService } from "../db.service";
import { Teatro } from '../app.component';
import { MostraTeatro } from '../prenotazione/prenotazione.component';


@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
})

export class NuovoTeatroComponent implements OnInit {

  @Input() clicked: boolean;
  @Input() chiave: string;
  @Input() bookerid: string='';
  newtheatre: boolean = false;

  constructor(private db: DbService) {}
  

  public newTheatre() {
    this.clicked = true;
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

  filepalchi: string;
  fileplatea: string;
  nposti: number = 10;

   public CreateTheatre() {
      this.newtheatre = true;
      console.log(this.newtheatre);
      this.clicked = false;
      console.log(this.clicked);
      
      /* var NuovoTeatro = new Teatro([],[],this.nposti, parseInt(this.fileplatea), this.nposti, parseInt(this.filepalchi));

       console.log("Creato un nuovo teatro di " + NuovoTeatro.nfilepalchi + " file per i palchi e di " + NuovoTeatro.nfileplatea + " file per la platea");
       console.log(this.clicked);
       console.log(this.chiave);
       console.log(this.bookerid);
       
      var NuovaplateaPrenotazione = new MostraTeatro(NuovoTeatro.platea, 'platea');
      var NuovapalchiPrenotazione = new MostraTeatro(NuovoTeatro.palchi, 'palchi'); 

       console.log(NuovoTeatro); */

    
  } 

  ngOnInit() {}

}

