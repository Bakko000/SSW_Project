import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DbService } from './db.service';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ DbService ]
})
export class AppModule { }
