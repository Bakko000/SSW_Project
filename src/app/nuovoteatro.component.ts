import { Component, Output, EventEmitter,OnInit } from '@angular/core';


@Component({
  selector: 'app-nuovoteatro',
  templateUrl: './nuovoteatro.component.html'
})
export class NuovoTeatroComponent implements OnInit {

  constructor() { }

  test = 0;
  
  newTheatre() {
    alert("ciao");
    this.test++;
  }

  ngOnInit() {
  }

}

