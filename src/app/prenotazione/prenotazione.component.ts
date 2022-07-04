import { Component, Input, OnInit } from '@angular/core';
import { Teatro } from '../app.component';

export class MostraTeatro {
  prenotazione = [];
  bookerid: string;
  constructor(posti, settore, bookerid) {
    this.bookerid = bookerid;
    var element = document.getElementById(settore);
    this.prenotazione = posti.map((fila, i) => {
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button');
        if (settore == 'platea') {
          btn.setAttribute('id', 'Platea-P' + (j + 1) + (i + 1));
        } else {
          btn.setAttribute('id', 'Palchi-P' + (j + 1) + (i + 1));
        }
        element.appendChild(btn);
        btn.style.color = nome !== 'x' ? 'red' : 'green';
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.value = nome == 'x' ? 'Libero' : nome;
        btn.addEventListener('click', this.selezionaPosto, false);
        btn.booker = this.bookerid;
        return btn;
      });
      element.appendChild(document.createElement('br'));
      return p;
    });
  }

  private selezionaPosto(event) {
    const nomeEl = document.getElementById('nome');
    if (this.style.color != 'red') {
      this.style.color = 'red';
      nomeEl.innerHTML = event.currentTarget.booker + ' ha prenotato il posto <i>' + this.id + '</i>';
      this.value = event.currentTarget.booker;
    } else {
      nomeEl.innerHTML = this.value;
    }
  }
}

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css'],
})
export class PrenotazioneComponent implements OnInit {
  @Input() chiave: string;
  @Input() bookerid: string = '';
  prenota: boolean;

  nfilePlatea = 5;
  npostiPlatea = 10;
  nfilePalchi = 4;
  npostiPalchi = 6;

  MyTheatre = new Teatro([],[], this.npostiPlatea, this.nfilePlatea, this.npostiPalchi,this.nfilePalchi
  );

  constructor() {}

  public Prenotare() {

    this.MyTheatre.platea[2][1] = 'Alessio';
    this.MyTheatre.platea[3][4] = 'Gianna';
    this.MyTheatre.palchi[2][1] = 'Luigi';

    var plateaPrenotazione = new MostraTeatro(this.MyTheatre.platea, 'platea', this.bookerid);
    var palchiPrenotazione = new MostraTeatro(this.MyTheatre.palchi, 'palchi', this.bookerid);
  }
  
  ngOnInit() {}
}
