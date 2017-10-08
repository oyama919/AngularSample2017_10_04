import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent  {
  title = 'Angular';
  contnets = 'Angular Sample Contents';
  book = {
    title: 'Book1',
    price: '3000'
  };
  safeMsg : SafeHtml;
  msg : string = `
        <script>window.alert("こっちはアラートでない");</script>
        <p>HTML文書のエスケープ使用確認</p>
        <a href="#" onclick=" alert('onclickのアラートでる')">リンク</a>
        <button>「Buttonタグある」</button>
        <font color="Red">インラインの色は出る</font>
        `;
  constructor(private sanitizer: DomSanitizer) {
    // msgプロパティのサニタイズを許可
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
  };
  len = 2;
  datasample = "datasample text";
  caseSample = "Case Sample";
  separatorNumber = 1234.5678;
  sliceMsg = '123456789';
  sliceData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  result = '現在時刻は不明です';
  name = "User Name";

  onclick(){
    this.result = `現在時刻は、${new Date().toLocaleTimeString()}です。`
  }
}
