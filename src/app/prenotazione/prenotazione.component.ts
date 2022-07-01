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
  btn: HTMLElement;

  constructor() { }

  ngOnInit() {

    const out: HTMLElement = document.getElementById('prenota') as HTMLElement;
    this.prenotazioni = this.platea.map((fila, i) => {
      this.p = fila.map((nome, j) => {
        this.btn = document.createElement("button");
        //out.appendChild(this.btn);
        this.btn.style.color = nome !== 'x' ? 'red' : 'green';
        this.btn.innerHTML = 'P' + (j + 1) + (i + 1);
        this.btn.value = nome;
        this.btn.addEventListener('click', this.mostraNome);
        return this.btn;
      });
    });

    this.platea[2][1] = 'Alessio';
    this.platea[3][4] = 'Gianna';
  }

  mostraNome(event) {
    this.nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    this.nomeEl.innerHTML=value;
  }

}