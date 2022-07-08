import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Teatro } from '../app.component';

@Component({
  selector: 'nuovoteatro-root',
  templateUrl: './nuovoteatro.component.html',
  styleUrls: ['../app.component.css']
})
export class NuovoTeatroComponent implements OnInit {
  @Input() clicked: boolean;
  @Input() chiave: string;
  @Input() newtheatre: boolean = false;

  constructor(private db: DbService) {}

  public newTheatre() {
    this.clicked = true;   // Fai apparire il form
    this.newtheatre = true;  // Comunica che si sta creando un nuovo teatro
    const output = <HTMLElement>document.getElementById('output');
   this.db.newKey().subscribe({
      next: (content: any) => {
        this.chiave = content;
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }

  postiplatea: string;
  postipalchi: string;
  dimensioni: any[] = [];

  public CreateTheatre() {
    this.clicked = false;  // Fai sparire il form
    this.dimensioni[0] = this.postiplatea;
    this.dimensioni[1] = this.postipalchi;
    var NuovoTeatro = new Teatro([],[], parseInt(this.postiplatea), 7,  parseInt(this.postipalchi), 4);
    var prenotazione = this.dimensioni.concat(NuovoTeatro.platea).concat(NuovoTeatro.palchi);
   this.db.setTheatre(this.chiave, prenotazione).subscribe({
      error: (err) => {
        console.error(err.error);
      },
    }); 
  }
  ngOnInit() {}
}
