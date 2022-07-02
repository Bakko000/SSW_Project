import { Component } from '@angular/core';
import { DbService } from './db.service';

export class Teatro {
  platea: any[] = [];
  palchi: any[] = [];
  npostiplatea: number = 10;
  nfileplatea: number = 5;
  npostipalchi: number = 6;
  nfilepalchi: number = 4;

  constructor(platea: any[] = [], palchi: any[] = [], npostiplatea: number, nfileplatea: number, npostipalchi: number, 
    nfilepalchi: number) {
    this.platea = new Array(nfileplatea).fill('').map(() => new Array(npostiplatea).fill('x'));
    this.palchi = new Array(nfilepalchi).fill('').map(() => new Array(npostipalchi).fill('x'));
    this.npostiplatea= npostiplatea;
    this.nfileplatea= nfileplatea;
    this.npostipalchi= npostipalchi;
    this.nfilepalchi= nfilepalchi;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  clicked: boolean = false;
  chiave: string = '';

  constructor(private db: DbService) {}

  Login(key: string) {
    const output = <HTMLElement>document.getElementById('output');
    this.db.checkKey(key).subscribe({
      next: (content: any) => {
        if (content != null) {
          output.innerHTML = content;
        } else {
          this.chiave = key;
        }
        console.log('Accesso al teatro');
      },
      error: (err) => {
        console.error(err.error);
        console.log('Il teatro selezionato non esiste');
      },
    });
  }
}
