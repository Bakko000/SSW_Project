import {
  Component,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css'],
})

export class PrenotazioneComponent implements OnInit {
  @ViewChild('prenota') prenota: ElementRef;
  
  @Input() chiave: string;
  @Input() prenotazione: string;

  nfile = <number>7;
  nposti = <number>10;
  platea = Array(this.nfile).fill('').map(() => Array(this.nposti).fill('x'));
  btn: HTMLButtonElement;

  constructor(private renderer: Renderer2) {}

  Prenotare() {
    
    this.platea[2][1]= 'Alessio';
    this.platea[3][4]= 'Gianna';
    this.prenotazioni = this.platea.map((fila, i) => {
      this.p = fila.map((nome, j) => {
        this.btn = this.renderer.createElement('button');
        this.renderer.appendChild(this.prenota.nativeElement, this.btn);
        this.btn.style.color = nome !== 'x' ? 'red' : 'green';
        this.btn.innerHTML = 'P' + (<number>j + 1) + (<number>i + 1);
        this.btn.value = nome == 'x' ? 'Libero' : nome;
        this.btn.addEventListener('click', this.mostraNome);
        return this.btn;
      });
    });

  }

  mostraNome(event) {
    this.nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    if(this.style.color!="red") {
      this.style.color="red";
      this.value= this.prenotazione;
      console.log(this.prenotazione);
    } else {
      this.nomeEl.innerHTML = value;
    }
  }

  ngOnInit() {  
    console.log(this.prenotazione);
  }
}
