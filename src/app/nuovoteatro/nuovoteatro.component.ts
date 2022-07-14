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

  constructor(private db: DbService) {}

  public newTheatre() {
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
