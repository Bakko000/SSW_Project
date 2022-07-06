import { HttpClient } from '@angular/common/http/public_api';
import { PrefixNot } from '@angular/compiler/src/expression_parser/ast';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Teatro } from '../app.component';
import { DbService } from '../db.service';

export class MostraTeatro {
  parterre = [];
  bookername: string;
  chiave: string;
  prenota: any[];
  postipla: number;
  postipal: number;
  constructor(posti, settore, bookername, chiave, private db: DbService, postipal, postipla) {
    this.bookername = bookername;
    this.chiave = chiave;
    this.prenota = prenota;
    this.postipal = postipal;
    this.postipla = postipla;
    var element = document.getElementById(settore);
    this.parterre = posti.map((fila, i) => {
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button');
        if (settore == 'platea') {
          btn.setAttribute('id', (j) + ", " + (i));
        } else {
          btn.setAttribute('id', 'Palchi-P' + (j + 1) + (i + 1));
        }
        element.appendChild(btn);
        btn.style.color = nome !== 'x' ? 'red' : 'green';
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.value = nome == 'x' ? 'Libero' : nome;
        btn.addEventListener('click', this.selezionaPosto, false);
        btn.booker = this.bookername;
        btn.key = this.chiave;
        btn.npostiplatea = this.postipla;
        btn.npostipalchi = this.postipal;
        btn.pren = this.prenota;
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

    var prenotato = this.id.split(',');
    var posto = prenotato[0];
    var fila = prenotato[1];
    var key = event.currentTarget.key;
    var dimensioni = [];
    dimensioni[0] = event.currentTarget.npostiplatea;
    dimensioni[1] = event.currentTarget.npostipalchi;
    var NuovoTeatro = new Teatro([],[], parseInt(event.currentTarget.npostiplatea), 7,  parseInt(event.currentTarget.npostipalchi), 4);
    console.log(NuovoTeatro);
    NuovoTeatro.platea[parseInt(fila)][parseInt(posto)] = event.currentTarget.booker;
    console.log(NuovoTeatro);
    var NuovaPrenotazione = dimensioni.concat(NuovoTeatro.platea).concat(NuovoTeatro.palchi);
    this.db.setTheatre(key, NuovaPrenotazione).subscribe({
      error: (err) => {
        console.error(err.error);
      },
    });

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
          var prenotazione = JSON.parse(content);
          let postipla = parseInt(prenotazione.slice(0,1));
          let postipal = parseInt(prenotazione.slice(1,2));
          var MyTheatre = new Teatro([], [], postipla, 7, postipal, 4);
          var plateaPrenotazione = new MostraTeatro(MyTheatre.platea, 'platea', this.bookername, this.chiave, this.db, prenotazione, postipla, postipal);
          var palchiPrenotazione = new MostraTeatro(MyTheatre.palchi, 'palchi', this.bookername, this.chiave, this.db, prenotazione, postipla, postipal);
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
