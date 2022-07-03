import {Component, Input, OnInit}  from '@angular/core';
/* import { Output } from '@angular/core/src/metadata/directives'; */
import { Teatro } from '../app.component';

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
        btn.addEventListener('click', this.mostraNome);
        return btn;
      });
    element.appendChild(document.createElement("br"));
    return p;
  });
}

  private mostraNome(event) {
    const nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    if(this.style.color != "red") {
      this.style.color = "red";
    } else {
      nomeEl.innerHTML = value;
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
  @Input() bookerid: string;

  nfilePlatea = 5;
  npostiPlatea = 10;
  nfilePalchi = 4;
  npostiPalchi = 6;

 MyTheatre = new Teatro([],[],this.npostiPlatea, this.nfilePlatea, this.npostiPalchi, this.nfilePalchi);

  constructor() {}

  public Prenotare() {
    console.log(this.MyTheatre);
    console.log(this.bookerid);
    
    this.MyTheatre.platea[2][1]= 'Alessio';
    this.MyTheatre.platea[3][4]= 'Gianna';
    this.MyTheatre.palchi[2][1] = 'Luigi'; 

    var plateaPrenotazione = new MostraTeatro(this.MyTheatre.platea, 'platea');
    var palchiPrenotazione = new MostraTeatro(this.MyTheatre.palchi, 'palchi'); 

  }

  /*public GetBookerId(): string {
    if(this.bookerid != '') {
      return this.bookerid;
    } else {
      return undefined;
    }
  } */


  ngOnInit() {}
}
