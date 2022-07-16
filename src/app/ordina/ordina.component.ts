import { Component, OnInit, Input } from '@angular/core';
import { PrenotazioneComponent } from '../prenotazione/prenotazione.component';

@Component({
  selector: 'ordina',
  templateUrl: './ordina.component.html',
  styleUrls: ['./ordina.component.css']
})
export class OrdinaComponent implements OnInit {

  @Input() chiave: string;
  @Input() bookerid: string;

  constructor() { }

 public selezionaPosto() {
    alert(this.chiave);
    alert(this.bookerid);
    const nomeEl = document.getElementById('nome');
    var valueAttr = event.srcElement.attributes.value;
    var value = valueAttr.nodeValue;
    if(this.style.color != "red") {
      this.style.color = "red";
      value = this.bookerid;
    } else {
      nomeEl.innerHTML = value;
    }
  }

  ngOnInit() {
  }

}