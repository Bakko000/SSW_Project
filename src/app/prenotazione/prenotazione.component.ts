import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';
import { DbService } from '../db.service';

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
      nomeEl.innerHTML =  "Occupato da " + this.value;
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
  @Output() prenotazione = new EventEmitter<string>();
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

          var plateaPrenotazione = new MostraTeatro(MyTheatre.platea, 'platea', this.bookerid);
          var palchiPrenotazione = new MostraTeatro(MyTheatre.palchi, 'palchi', this.bookerid);
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
