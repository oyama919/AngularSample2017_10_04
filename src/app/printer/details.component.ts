import { Component, Input } from '@angular/core';
import { PrinterData } from './printer-data';

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

export class DetailsComponent {
  @Input() printerItem: PrinterData;
 }
