import { Component } from "@angular/core";
import { Local, LocaisRepository } from "../repository/locais.repository";
import { Campus, CampusRepository } from "../repository/campus.repository";

@Component({
	selector: 'info-widget',
	templateUrl: 'info.widget.html'
})

export class InfoWidget { 
	private campus: Campus = new Campus( "", "")
	private local: Local = new Local("", "", "")

	constructor() {
		LocaisRepository.get().forEach(items => {
			items.forEach(item => {
				if (item.id === LocaisRepository.id) {
					this.local = item
				}
			})
		})
		CampusRepository.get().valueChanges().forEach(item => {
			this.campus = item
		})
	}
}