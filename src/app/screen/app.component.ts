import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore } from "@angular/fire/firestore";
import { LocaisRepository } from '../repository/locais.repository';
import { CampusRepository } from '../repository/campus.repository';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		fs: AngularFirestore
	) {
		LocaisRepository.firestore = fs
		CampusRepository.firestore = fs
		this.initializeApp()
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

}
