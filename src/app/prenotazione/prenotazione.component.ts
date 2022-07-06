import { Component, Input, OnInit } from '@angular/core';
import { Teatro } from '../app.component';
import { DbService } from '../db.service';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css'],
})
export class PrenotazioneComponent implements OnInit {

  @Input() chiave: string;
  @Input() bookerid: string = '';
  stop: boolean = false;
  platea: any[] = [];
  palchi: any[] = [];
  postipla: number;
  postipal: number;

  constructor(private db: DbService) {}

  public Prenotare() {

    if(!this.stop) {
    this.db.getTheatre(this.chiave).subscribe({
      next: (content: any) => {
          var prenotazione = JSON.parse(content);
          this.postipla = parseInt(prenotazione.slice(0,1));
          this.postipal = parseInt(prenotazione.slice(1,2));
          this.platea = prenotazione.slice(2,9);
          this.palchi = prenotazione.slice(9,);
      },
      error: (err) => {
        console.error(err.error);
      },
    });
    this.stop = true;
  }
}
  public selezionaPosto(event, settore) {
    const nomeEl = document.getElementById('notifica');
    if(event.srcElement.attributes.style.nodeValue == "color: green;") {
      this.style = "color: red;";
      var idbtn = event.srcElement.attributes.id.nodeValue;
      var prenotato = idbtn.split(',');
      var posto = prenotato[0];
      var fila = prenotato[1];
      var dimensioni = [];
      dimensioni[0] = this.postipla;
      dimensioni[1] = this.postipal;
      if(settore=="platea"){
      this.platea[parseInt(fila)][parseInt(posto)] = this.bookerid;
      } else {
        this.palchi[parseInt(fila)][parseInt(posto)] = this.bookerid;
      }
      var NuovaPrenotazione = dimensioni.concat(this.platea).concat(this.palchi);
      this.db.setTheatre(this.chiave, NuovaPrenotazione).subscribe({
        next: () => {
          nomeEl.innerHTML = this.bookerid + " ha prenotato il posto <i>" + idbtn+"</i>";
        },
        error: (err) => {
          console.error(err.error);
        },
      });
    } else {
      var valueAttr = event.srcElement.attributes.value;
      var value = valueAttr.nodeValue;
      nomeEl.innerHTML= "Occupato da " + value;
    }
  }
  ngOnInit() {}
}
