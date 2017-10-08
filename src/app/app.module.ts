import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  providers:    [{ provide: LOCALE_ID, useValue: 'ja-JP'}],
  // providers:    [{ provide: LOCALE_ID, useValue: 'de-DE'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
