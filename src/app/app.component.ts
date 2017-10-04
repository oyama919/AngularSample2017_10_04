import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent  {
  title = 'Angular';
  contnets = 'Angular Sample Contents'
  book = {
    title: 'Book1',
    price: '3000'
  }
}
