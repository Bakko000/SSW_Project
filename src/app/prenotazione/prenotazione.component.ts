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

  nfile = 5;
  nposti = 10;
  p: Array<HTMLElement>;
  platea: Array<Array<string>> = new Array(this.nfile).fill('').map(() => new Array(this.nposti).fill('x'));
  btn: HTMLButtonElement;
  br: HTMLElement;

  constructor(private renderer: Renderer2) {}

  Prenotare() {
    
    this.platea[2][1]= 'Alessio';
    this.platea[3][4]= 'Gianna';
    var prenotazioni = this.platea.map((fila, i) => {
      this.p = fila.map((nome, j) => {
        this.btn = this.renderer.createElement('button');
        this.renderer.appendChild(this.prenota.nativeElement, this.btn);
        this.btn.style.color = nome !== 'x' ? 'red' : 'green';
        this.btn.innerHTML = 'P' + (<number>j + 1) + (<number>i + 1);
        this.btn.value = nome == 'x' ? 'Libero' : nome;
        this.btn.addEventListener('click', this.mostraNome);
        return this.btn;
      });
      this.br = this.renderer.createElement("br");
      this.renderer.appendChild(this.prenota.nativeElement, this.br)

  });

    console.log(this.p);
    console.log(prenotazioni);
    console.log(this.platea);

  }

  mostraNome(event) {
    this.nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    if(this.style.color != "red") {
      this.style.color = "red";
    } else {
      this.nomeEl.innerHTML = value;
    }
  }

  ngOnInit() {  
    
  }
}
