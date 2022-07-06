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

  constructor(private db: DbService) {}

  public Prenotare() {

    if(!this.stop) {
    this.db.getTheatre(this.chiave).subscribe({
      next: (content: any) => {
          var prenotazione = JSON.parse(content);
          let postipla = parseInt(prenotazione.slice(0,1));
          let postipal = parseInt(prenotazione.slice(1,2));
          var MyTheatre = new Teatro([], [], postipla, 7, postipal, 4);
          this.platea = MyTheatre.platea;
          this.palchi = MyTheatre.palchi;
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
      nomeEl.innerHTML = this.bookerid + " ha prenotato il posto <i>" + event.srcElement.attributes.id.nodeValue +"</i>";
      console.log(this.chiave);
    }
  }

  ngOnInit() {}
}
