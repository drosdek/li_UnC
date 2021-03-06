import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { InfoWidget } from '../widget/info.widget';
import { MenuWidget } from '../widget/menu.widget';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: MainComponent
			}
		])
	],
	declarations: [
		MainComponent,
		InfoWidget,
		MenuWidget
	],
	entryComponents: [
		InfoWidget
	]
})
export class MainComponentModule { }
