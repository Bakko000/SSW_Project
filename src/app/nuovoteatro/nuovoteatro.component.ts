import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Teatro } from '../app.component';

@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
  styleUrls: ['../app.component.css'],
})
export class NuovoTeatroComponent implements OnInit {
  @Input() chiave: string;
  postiplatea: string;
  postipalchi: string;
  dimensioni: any[] = [];

  constructor(private db: DbService) {}

  public CreateTheatre() {
    this.dimensioni[0] = parseInt(this.postiplatea);
    this.dimensioni[1] = parseInt(this.postipalchi);

    if(this.dimensioni[0] > 1 && this.dimensioni[1] > 1) {
    var NuovoTeatro = new Teatro([],[],this.dimensioni[0],7,this.dimensioni[1],4);
    var prenotazione = this.dimensioni.concat(NuovoTeatro.platea).concat(NuovoTeatro.palchi);

    this.db.newKey().subscribe({
      next: (content: any) => {
        this.chiave = content;
      },
      error: (err) => {
        console.error(err.error);
      },
    });
    this.db.setTheatre(this.chiave, prenotazione).subscribe({
      next: (content: any) => {
        document.getElementById("notifica").innerHTML = "Creato un nuovo teatro con " + this.postipalchi + "posti per i palchi e di " + this.postiplatea + " posti per la platea. Il teatro è ora accessibile con la seguente chiave: "+ this.chiave;
      },
      error: (err) => {
        console.error(err.error);
      },
    });
   } else {
     throw "Inserisci valori validi"
   }
  }
  ngOnInit() {}
}
