import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DbService } from './db.service';
import { Teatro } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { NominativoComponent } from './nominativo/nominativo.component';
import { NuovoTeatroComponent } from './nuovoteatro/nuovoteatro.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule],
  declarations: [ AppComponent, NuovoTeatroComponent, PrenotazioneComponent, NominativoComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ DbService, Teatro ]
})
export class AppModule { }
