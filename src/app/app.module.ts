import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { InfoWidget } from './widget/info.widget';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './screen/app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		AngularFireModule.initializeApp(environment.config),
		AngularFirestoreModule,
		AppRoutingModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		QRScanner,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		InAppBrowser
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
