import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';
import { DbService } from '../db.service';

export class MostraTeatro {
  parterre = [];
  bookername: string;
  constructor(posti, settore, bookername) {
    this.bookername = bookername;
    var element = document.getElementById(settore);
    this.parterre = posti.map((fila, i) => {
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
        btn.booker = this.bookername;
        return btn;
      });
      element.appendChild(document.createElement('br'));
      return p;
    });
  }

  public selezionaPosto(event) {
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
  @Input() bookername: string = '';
  stop: boolean = false;
  
  constructor(private db: DbService) {}

  public Prenotare() {

    if(!this.stop) {
    this.db.getTheatre(this.chiave).subscribe({
      next: (content: any) => {
        console.log(content);
          var prenotazione = JSON.parse(content);
          let postipla = parseInt(prenotazione.slice(0,1));
          let postipal = parseInt(prenotazione.slice(1,2));
          let prenoplatea = prenotazione.slice(2,9);
          let prenopalchi = prenotazione.slice(9,);
          var MyTheatre = new Teatro(prenoplatea, prenopalchi, postipla, 7, postipal, 4);

          var plateaPrenotazione = new MostraTeatro(MyTheatre.platea, 'platea', this.bookername);
          var palchiPrenotazione = new MostraTeatro(MyTheatre.palchi, 'palchi', this.bookername);
      },
      error: (err) => {
        console.error(err.error);
      },
    });
    this.stop = true;
  }
}
  ngOnInit() {}
}
