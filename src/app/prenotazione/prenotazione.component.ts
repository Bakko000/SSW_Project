import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {

  @Input() chiave: string;
  @Input() prenotazione: string;

  nfile = 6;
  nposti = 6;
  platea=Array(this.nfile).fill("").map(() => Array(this.nposti).fill("x"));
  
  nomeEl: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.platea[2][1] = 'Alessio';
    this.platea[3][4] = 'Gianna';
    /*this.prenotazioni = this.platea.map( (fila,i) => {
     this.p=fila.map( (nome,j) => {
      })
    }) 
    console.log(this.prenotazioni) */
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