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
          console.log(this.platea);
          var MyTheatre = new Teatro(this.platea, this.palchi, this.postipla, 7, this.postipal, 4);
          this.platea = MyTheatre.platea;
          this.palchi = MyTheatre.palchi;
          console.log(this.platea);
      },
      error: (err) => {
        console.error(err.error);
      },
    });
    this.stop = true;
  }
}
  public selezionaPosto(event) {
    const nomeEl = document.getElementById('notifica');
    if(event.srcElement.attributes.style.nodeValue == "color: green;") {
      event.srcElement.attributes.style.nodeValue = "color: red;";
      var idbtn = event.srcElement.attributes.id.nodeValue;
      nomeEl.innerHTML = this.bookerid + " ha prenotato il posto <i>" + idbtn +"</i>";
      var prenotato = idbtn.split(',');
      var posto = prenotato[0];
      var fila = prenotato[1];
      var dimensioni = [];
      dimensioni[0] = this.postipla;
      dimensioni[1] = this.postipal;

      var NuovoTeatro = new Teatro([],[], this.postipla, 7, this.postipal, 4);
      console.log(NuovoTeatro);
      NuovoTeatro.platea[parseInt(fila)][parseInt(posto)] = this.bookerid;
      console.log(NuovoTeatro);

      var NuovaPrenotazione = dimensioni.concat(NuovoTeatro.platea).concat(NuovoTeatro.palchi);
      this.db.setTheatre(this.chiave, NuovaPrenotazione).subscribe({
        error: (err) => {
          console.error(err.error);
        },
      });
    }
  }
  ngOnInit() {}
}
