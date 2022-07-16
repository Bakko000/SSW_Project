import {Component, Input, OnInit}  from '@angular/core';
import { Teatro } from '../app.component';
import { DbService } from '../db.service';
import { OrdinaComponent } from '../ordina/ordina.component';

export class MostraTeatro {
  prenotazione = [];
  constructor(posti, settore) {
    var element = document.getElementById(settore);
    this.prenotazione = posti.map((fila, i) => {
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button');
        element.appendChild(btn);
        btn.style.color = nome !== 'x' ? 'red' : 'green';
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.value = nome == 'x' ? 'Libero' : nome;
        btn.addEventListener('click', OrdinaComponent.prototype.selezionaPosto);
        return btn;
      });
    element.appendChild(document.createElement("br"));
    return p;
  });
 }
}

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css'],
})


export class PrenotazioneComponent implements OnInit {
 
  @Input() chiave: string;
  @Input() bookerid: string;

  repeat: boolean = false;

  constructor(private db: DbService) {}

  public Prenotare() {

    if(!this.repeat) {

    this.db.getTheatre(this.chiave).subscribe({
      next: (content: any) => {
          var json = JSON.parse(content);
          var npostipalchij = json.npostipalchi;
          var nfilepalchij = json.nfilepalchi;
          var npostiplateaj = json.npostiplatea;
          var nfileplateaj = json.nfileplatea;

          var MyTheatre = new Teatro([],[], npostiplateaj, nfileplateaj, npostipalchij, nfilepalchij);

          console.log(MyTheatre);

          var plateaPrenotazione = new MostraTeatro(MyTheatre.platea, 'platea');
          var palchiPrenotazione = new MostraTeatro(MyTheatre.palchi, 'palchi');
      },
      error: (err) => {
        console.error(err.error);
      },
    });
    this.repeat = true;
  }
}

  ngOnInit() {}
}
