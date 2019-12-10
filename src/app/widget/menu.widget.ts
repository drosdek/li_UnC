import { Component, Input } from '@angular/core';
import { LocaisRepository } from '../repository/locais.repository';

@Component({
	selector: 'menu-widget',
	templateUrl: 'menu.widget.html'
})

export class MenuWidget {
	@Input('show-modal') showModal: Function
	@Input('go-scanner') goScanner: Function
	@Input('go-map') goMap: Function
	@Input('is-selected') isSelected: boolean
}