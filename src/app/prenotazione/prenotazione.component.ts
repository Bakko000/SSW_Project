import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  @Input() chiave: string;
  @Input() prenotazione: string;

  nfile = 5;
  nposti = 10;
  platea=Array(this.nfile).fill("").map(() => Array(this.nposti).fill("x"));
  /* platea.map(fila,i); */
  nomeEl: HTMLElement;

  constructor() { }

  ngOnInit() {
    console.log(this.platea);
    /* this.posti[2] = "Luisa";
    this.posti[3] = "Gianmarco"; 
    console.log(this.posti); */
    console.log(this.chiave);
  }

  mostraNome(event) {
    this.nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    this.nomeEl.innerHTML=value;
  }

}