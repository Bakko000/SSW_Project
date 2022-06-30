import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DbService } from './db.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { NominativoComponent } from './nominativo/nominativo.component';
import { NuovoTeatroComponent } from './nuovoteatro/nuovoteatro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, NuovoTeatroComponent, PrenotazioneComponent, NominativoComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ DbService ]
})
export class AppModule { }
