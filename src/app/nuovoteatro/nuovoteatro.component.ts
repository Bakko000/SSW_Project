import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';
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
    const output = <HTMLElement>document.getElementById('output');
   /* this.db.newKey().subscribe({
      next: (content: any) => {
        this.chiave = content;
      },
      error: (err) => {
        console.error(err.error);
      },
    }); */
  }

  postiplatea: string;
  postipalchi: string;
  dimensioni: Array<string>;

  public CreateTheatre() {
    this.clicked = false;
    this.dimensioni[1] = "ciao";
    var NuovoTeatro = new Teatro([],[], parseInt(this.postiplatea), 7,  parseInt(this.postipalchi), 4);
    var prenotazione = (NuovoTeatro.platea).concat(NuovoTeatro.palchi);
    console.log(this.dimensioni);
   /* this.db.setTheatre(this.chiave, prenotazione).subscribe({
      next: (content: any) => {
        console.log(content);
      },
      error: (err) => {
        console.error(err.error);
      },
    }); */
  }
  ngOnInit() {}
}
