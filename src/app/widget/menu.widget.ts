import { Component, Input } from '@angular/core';

@Component({
	selector: 'menu-widget',
	templateUrl: 'menu.widget.html'
})

export class MenuWidget {
	@Input('show-modal') showModal: Function
	@Input('go-scanner') goScanner: Function
}