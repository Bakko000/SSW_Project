import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Teatro } from '../app.component';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css'],
})
export class NominativoComponent implements OnInit {
  @Input() chiave: string;
  @Input() bookerid: string = '';
  @Input() newtheatre: boolean;
  dimensioni: any[] = [];
  npostiplatea: number;
  npostipalchi: number;

  constructor(private db: DbService) {}

  public Prenota(nominativo: string) {
    this.bookerid = nominativo;
  }
  /*public Reset() {
    this.db.getTheatre(this.chiave).subscribe({
      next: (content: any) => {
        var caratteristiche = JSON.parse(content);
        this.npostiplatea = caratteristiche.slice(0,1);
        this.npostipalchi = caratteristiche.slice(1,2);
        this.dimensioni[0] = this.npostiplatea;
        this.dimensioni[1] = this.npostipalchi;
      },
    }); 
    /*
    var NuovoTeatro = new Teatro([],[], this.npostiplatea, 7,  this.npostipalchi, 4);
    var Reset = this.dimensioni.concat(NuovoTeatro.platea).concat(NuovoTeatro.palchi);
    console.log(NuovoTeatro);
    this.db.setTheatre(this.chiave, Reset).subscribe({
      error: (err) => {
        console.error(err.error);
      },
    }); 
  } */
  ngOnInit() {}
}
