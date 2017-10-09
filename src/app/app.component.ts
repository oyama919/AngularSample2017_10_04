import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

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
  safeIframeUrl: SafeResourceUrl;
  // TODO httpsだとできない要検証
  iframeUrl = "http://www.buildinsider.net/web/angularjstips/0001";
  constructor(private sanitizer: DomSanitizer) {
    // msgプロパティのサニタイズを許可
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
    // iframeUrlプロパティのサニタイズを許可
    this.safeIframeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  };

  len = 2;
  datasample = "datasample text";
  caseSample = "Case Sample";
  separatorNumber = 1234.5678;
  // スライス
  sliceMsg = '123456789';
  sliceData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  name = "User Name";
  //時刻表示
  result = '現在時刻は不明です';
  onclick(e: any) {
    console.log(e);
    this.result = `現在時刻は、${new Date().toLocaleTimeString()}です。`
  }
  // 送信ボタンで値の反映
  FormMsg ='ダブルクリックで内容が変わります';
  ondblclick(value: string) {
    this.FormMsg = `Hello, ${value}!!`;
  }
  // 表示すべきメッセージ
  mailLabels = {
    '=0'   : '新着メッセージはありません。',
    '=1'   : 'メッセージがあります。',
    'other': '#件のメッセージがあります。',
  }
  // 新着メール情報
  mails = [
    { name: 'ユーザーA', body: 'メッセージ内容' },
    { name: 'ユーザーB', body: 'メッセージ内容' },
    { name: 'ユーザーC', body: 'メッセージ内容' },
  ];
  percentValue = 0.98765;
  currencyValue = 12345.67890;
  activeFlag = true;//falseでスタイル無効化
  currentDate = new Date();
  weatherRec =[
    { day: '2017/10/7', weather: 'rainy' },
    { day: '2017/10/8', weather: 'cloudy' },
    { day: '2017/10/9', weather: 'sunny' },
  ];
  weatherJP ={
    'rainy': '雨',
    'cloudy': '曇り',
    'sunny': '晴れ',
  };
  show=true;
}
