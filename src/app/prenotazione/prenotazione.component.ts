import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  @Input() chiave: string;
  @Input() prenotazione: string;

  nfile = 7;
  nposti = 10;
  nfilePalchi = 4;
  npostiPalchi = 6;
  platea=Array(this.nfile).fill("").map(() => Array(this.nposti).fill("x"));
  palchi=Array(this.nfilePalchi).fill("").map(() => Array(this.npostiPalchi).fill("x"));
  
  nomeEl: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.platea[2][1] = 'Alessio';
    this.platea[3][4] = 'Gianna';
    console.log(this.chiave);
  }

  mostraNome(event) {
    this.nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    this.nomeEl.innerHTML=value;
  }

}