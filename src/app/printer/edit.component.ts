import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrinterData } from './printer-data';

@Component({
  selector: 'edit-printer',
  template: `
    <form #myForm='ngForm' (ngSubmit)='onPintterEditSubmit()' *ngIf='Item'>
      <div>
        <label for="maker">Maker</label>
        <span id="maker">{{printerItem.maker}}</span>
      </div>
      <div>
        <label for="series">Series</label>
        <input id="series" name="series" [(ngModel)]="printerItem.series" />
      </div>
      <div>
        <label for="price">Price</label>
        <input id="price" name="price" [(ngModel)]="printerItem.price" />
      </div>
      <div>
        <input tyle="submit" value="修正する">
      </div>
    </form>
  `
})

export class EditComponent {
  @Input() printerItem: PrinterData;
  @Output() edited = new EventEmitter<PrinterData>();
  //<Printer>　Printer型の$eventオブジェクトとして渡すデータ型を表す
  onPintterEditSubmit() {
    this.edited.emit(this.printerItem);
  }
 }
