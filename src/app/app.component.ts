import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  $(x) {
    return document.getElementById(x);
  }


  Login(checkKey: string) {
    
  }

  aggiungi() {
    alert("Aggiungi");
  }

}
