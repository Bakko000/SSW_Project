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
        this.db.setTheatre(this.chiave, prenotazione).subscribe({
          next: (content: any) => {
            this.newtheatre= true;
          },
          error: (err) => {
            console.error(err.error);
          },
        });
      },
      error: (err) => {
        console.error(err.error);
      },
    });
   } else {
     throw "Errore: inserisci valori validi";
   }
  }

  private clean() {
    this.newtheatre=undefined;
  }
  ngOnInit() {}
}
