import { Component, Input } from '@angular/core';
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { ShowQR } from '../screen/app.component';

@Component({
	selector: 'component-qrscanner',
})
export class QRScannerWidget {
	encodedData = '';
	QRSCANNED_DATA: string
	isOn = false
	scannedData: {}

	constructor(public qrScanCtrl: QRScanner, private showQR: ShowQR) {
		//this.showQR.show.next = this.showQR.show.next.bind(this)
	}

	goToQrScan() {
		this.qrScanCtrl.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					// camera permission was granted
					this.isOn = true;
					this.showQR.show.next(true)

					// start scanning
					const scanSub = this.qrScanCtrl.scan().subscribe((text: string) => {
						console.log('Scanned something', text);


						/*this.isOn = false;

						this.QRSCANNED_DATA = text;
						if (this.QRSCANNED_DATA !== '') {
							this.closeScanner();
							scanSub.unsubscribe();
						}*/

					});

				} else if (status.denied) {
					console.log('camera permission denied');
					this.qrScanCtrl.openSettings();
				} else {
				}
			})
			.catch((e: any) => console.log('Error is', e));
	}

	closeScanner() {
		this.showQR.show.next(false)
		this.isOn = false
	}
}