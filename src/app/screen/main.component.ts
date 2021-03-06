import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoWidget } from '../widget/info.widget';
import { LocaisRepository } from '../repository/locais.repository';

@Component({
	selector: 'app-main',
	templateUrl: 'main.component.html',
})
export class MainComponent {
	private isSelected: boolean = false;
	private modal

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

	hideModal() {
		this.modal.dismiss()
	}
	
	goScanner() {
		this.router.navigate(['/scan'])
	}

	ionViewDidEnter() {
		this.isSelected = LocaisRepository.id ? true : false
	}

	async presentModal() {
		this.modal = await this.modalController.create({
			component: InfoWidget,
			componentProps: {
				onClose: this.hideModal
			}
		})
		return await this.modal.present()
	}

}
