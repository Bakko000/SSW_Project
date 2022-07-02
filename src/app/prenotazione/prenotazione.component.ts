import {Component, Input, OnInit, Renderer2, ViewChild, ElementRef}  from '@angular/core';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css'],
})

export class PrenotazioneComponent implements OnInit {
  @ViewChild('plateaEl') plateaEl: ElementRef;
  @ViewChild('palchiEl') palchiEl: ElementRef;
  
  @Input() chiave: string;
  @Input() prenotazione: string;

  nfilePlatea = 5;
  npostiPlatea = 10;
  nfilePalchi = 4;
  npostiPalchi = 6;
  p: Array<HTMLElement>;
  

  teatro = {
  platea: new Array(this.nfilePlatea).fill('').map(() => new Array(this.npostiPlatea).fill('x')),
  palchi: new Array(this.nfilePalchi).fill('').map(() => new Array(this.npostiPalchi).fill('x')),
  };

  btn: HTMLButtonElement;
  br: HTMLElement;

  constructor(private renderer: Renderer2) {}

  Prenotare() {
    
    this.teatro.platea[2][1]= 'Alessio';
    this.teatro.platea[3][4]= 'Gianna';
    this.teatro.palchi[2][1] = 'Luigi';


    // ==== PLATEA =====

    var prenotazioniPlatea = this.teatro.platea.map((fila, i) => {
      this.p = fila.map((nome, j) => {
        this.btn = this.renderer.createElement('button');
        this.renderer.appendChild(this.plateaEl.nativeElement, this.btn);
        this.btn.style.color = nome !== 'x' ? 'red' : 'green';
        this.btn.innerHTML = 'P' + (<number>j + 1) + (<number>i + 1);
        this.btn.value = nome == 'x' ? 'Libero' : nome;
        this.btn.addEventListener('click', this.mostraNome);
        return this.btn;
      });
      this.br = this.renderer.createElement("br");
      this.renderer.appendChild(this.plateaEl.nativeElement, this.br)
  });

  this.renderer.appendChild(this.plateaEl.nativeElement, this.br);



  // ==== PALCHI =====

  var prenotazioniPalchi = this.teatro.palchi.map((fila, i) => {
    this.p = fila.map((nome, j) => {
      this.btn = this.renderer.createElement('button');
      this.renderer.appendChild(this.palchiEl.nativeElement, this.btn);
      this.btn.style.color = nome !== 'x' ? 'red' : 'green';
      this.btn.innerHTML = 'P' + (<number>j + 1) + (<number>i + 1);
      this.btn.value = nome == 'x' ? 'Libero' : nome;
      this.btn.addEventListener('click', this.mostraNome);
      return this.btn;
    });
    this.br = this.renderer.createElement("br");
    this.renderer.appendChild(this.palchiEl.nativeElement, this.br);
  });

}

  mostraNome(event) {
    const nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    if(this.style.color != "red") {
      this.style.color = "red";
    } else {
      nomeEl.innerHTML = value;
    }
  }

  ngOnInit() {}
}
