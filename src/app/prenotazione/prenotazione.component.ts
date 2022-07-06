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
  repeat: boolean = false;
  platea: any[] = [];
  palchi: any[] = [];

  constructor(private db: DbService) {}

  public Prenotare() {
    if (!this.repeat) { // Non si deve ripetere per più di una volta
      this.db.getTheatre(this.chiave).subscribe({
        next: (content: any) => {
          var json = JSON.parse(content);
          var npostipalchij = json.npostipalchi;
          var nfilepalchij = json.nfilepalchi;
          var npostiplateaj = json.npostiplatea;
          var nfileplateaj = json.nfileplatea;
          var MyTheatre = new Teatro([],[],npostiplateaj,nfileplateaj,npostipalchij,nfilepalchij);
          this.platea = MyTheatre.platea;
          this.palchi = MyTheatre.palchi;
        },
        error: (err) => {
          console.error(err.error);
        },
      });
      this.repeat = true;
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
