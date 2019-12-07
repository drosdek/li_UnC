import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore"
import { CampusRepository } from './campus.repository';

class _Mapwize {
	url: string
}

export class Local {

	public titulo: string
	public id: string
	public descricao: string
	public mapwize: _Mapwize

	constructor(titulo, descricao, mapwize, id = null) {
		this.titulo = titulo
		this.descricao = descricao
		this.mapwize = mapwize
		this.id = id
	}

}

export class LocaisRepository {

	private static locais: Observable<Local[]>
	public static firestore: AngularFirestore
	public static id: string
	private static collection: string = "locais"

	public static get(): Observable<Local[]> {
		if (CampusRepository.id) {
			this.locais = this.firestore.collection<Local>(
				this.collection + "/" + CampusRepository.id + "/" + this.collection
			).valueChanges()
			return this.locais
		}
		return null
	}

}