import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css']
})
export class NominativoComponent implements OnInit {

  @Input() chiave: string;
  @Output() prenotazione: string ='';

  constructor() { }

  Prenota(nominativo: string) {
    this.prenotazione = nominativo;
    console.log("Accesso alla prenotazione a nome di: " + this.prenotazione);
  } 

  Reset(){
    console.log("Teatro svuotato");
  }

  ngOnInit() {
    console.log(this.chiave);
  }

}