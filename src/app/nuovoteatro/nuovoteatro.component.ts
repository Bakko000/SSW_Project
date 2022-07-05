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
  filepalchi: number = 4;
  fileplatea: number = 7;

  public CreateTheatre() {
    this.clicked = false;
    var NuovoTeatro = new Teatro([],[], parseInt(this.postiplatea), this.fileplatea,  parseInt(this.postipalchi),this.filepalchi);
    this.db.setTheatre(this.chiave, NuovoTeatro).subscribe({
      next: (content: any) => {
        console.log(content);
      },
      error: (err) => {
        console.error(err.error);
      },
    });
  }
  ngOnInit() {}
}
