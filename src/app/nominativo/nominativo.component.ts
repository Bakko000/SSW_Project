import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css'],
})
export class NominativoComponent implements OnInit {
  @Input() chiave: string;
  @Input() bookerid: string = '';
  @Input() newtheatre: boolean;

  constructor() {}

  Prenota(nominativo: string) {
    this.bookerid = nominativo;
  }

  Reset() {
    console.log('Teatro svuotato');
  }

  ngOnInit() {
    console.log(this.chiave);
  }
}
