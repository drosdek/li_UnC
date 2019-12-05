import { Subject, BehaviorSubject } from 'rxjs';
import { Component, Injectable } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { QRScannerWidget } from '../widget/qrscanner.widget';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private qrScanner: QRScanner = new QRScanner()
  private qrWidget: QRScannerWidget = new QRScannerWidget(this.qrScanner, new ShowQR())
  private show: boolean = false

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private showQR: ShowQR
  ) {

    this.showQR.show.subscribe(next => {
      this.show = next
      if (!this.showQR) {
        this.qrScanner.hide()
        this.qrScanner.pausePreview()
        this.qrScanner.enableLight()
      }  else {
        this.qrScanner.show()
      }
    })
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navQRScanner() {
    NavController
  }

}

@Injectable()
export class ShowQR {
  public show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
}