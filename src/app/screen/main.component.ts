import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoWidget } from '../widget/info.widget';

@Component({
	selector: 'app-main',
	templateUrl: 'main.component.html',
})
export class MainComponent {

	constructor(
		private router: Router,
		public modalController: ModalController
	) {
		this.showModal = this.showModal.bind(this)
		this.goScanner = this.goScanner.bind(this)
	}

	showModal() {
		this.presentModal()
	}
	
	goScanner() {
		this.router.navigate(['/scan'])
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: InfoWidget
		});
		return await modal.present();
	}

}
