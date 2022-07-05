import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css'],
})
export class NominativoComponent implements OnInit {
  @Input() chiave: string;
  @Input() bookername: string = '';
  @Input() newtheatre: boolean;

  constructor(private db: DbService) {}

  public Prenota(nominativo: string) {
    this.bookername = nominativo;
  }
  public Reset() {
    var body = {};
    this.db.setTheatre(this.chiave, body).subscribe({
      next: (content: any) => {
        console.log("Teatro svuotato");
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }
  ngOnInit() {}
}
