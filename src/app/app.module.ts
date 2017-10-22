import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Add1Component }  from './add1.component';
import { Add2Component }  from './add2.component';
import { Add3Component }  from './add3.component';
import { PrinterDetailsComponent }  from './printer-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
    Add1Component, Add2Component, Add3Component, PrinterDetailsComponent ],
  entryComponents: [ Add1Component, Add2Component, Add3Component ],
  providers:    [{ provide: LOCALE_ID, useValue: 'ja-JP'}],
  // providers:    [{ provide: LOCALE_ID, useValue: 'de-DE'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
