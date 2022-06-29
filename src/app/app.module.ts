import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DbService } from './db.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { NominativoComponent } from './nominativo/nominativo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ DbService ]
})
export class AppModule { }
