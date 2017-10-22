import { Component, Input } from '@angular/core';
import { Printer } from './printer';

@Component({
  selector: 'detail-printer',
  template: `
    <ul *ngIf='printerItem'>
      <li>Maker:{{printerItem.maker}}</li>
      <li>Series:{{printerItem.series}}</li>
      <li>ModelName:{{printerItem.modelname}}</li>
      <li>Price:{{printerItem.price}}</li>
    </ul>
  `
})

export class PrinterDetailsComponent {
  @Input() printerItem: Printer;
 }
