import { Component, Input } from '@angular/core';
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { Router } from '@angular/router';
import { LocaisRepository } from '../repository/locais.repository';
import { CampusRepository } from '../repository/campus.repository';
import { timeout } from 'q';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
	encodedData = '';
	QRSCANNED_DATA: string
	isOn = false
	scannedData: {}
	private help: boolean = false

	constructor(
		private qrScanner: QRScanner,
		private router: Router,
	) {
		this.goToQrScan()
	}

	handleHelp(){
		this.help = !this.help
	}

	ionViewWillLeave() {
		this.qrScanner.show()
		this.qrScanner.destroy()
	}

	goToQrScan() {
		this.qrScanner.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					this.qrScanner.hide()
					this.help = !this.help
					let scanSub = this.qrScanner.scan().subscribe(async (text: string) => {

						try {
							let data = JSON.parse(text)

							if ("campus" in data && "local" in data) {

								await this.fetchData(data)

								this.qrScanner.show()
								this.router.navigateByUrl('/main')
								this.qrScanner.destroy()
								
								scanSub.unsubscribe()
							}
						} catch (e) {
							console.log(e)
							this.goToQrScan()
						}
						
					});

				}
			})
			.catch((e) => {
				console.log('Error is', e)
				this.router.navigate(['/main'])
			})
	}

	async fetchData(data) {
		await new CampusRepository(data.campus)
		await LocaisRepository.get()
		LocaisRepository.id = data.local
	}
}