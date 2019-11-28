import { Observable } from 'rxjs';
import { AngularFirestore } from "@angular/fire/firestore"
import { CampusRepository } from './campus.repository';

class _Mapwize {
	url: string
}

class Local {

	private titulo: string
	private id: string
	private descricao: string
	private mapwize: _Mapwize

	constructor(titulo, descricao, mapwize, id = null) {
		this.titulo = titulo
		this.descricao = descricao
		this.mapwize = mapwize
		this.id = id
	}

}

class LocaisRepository {

	private static locais: Observable<Local[]>
	private static firestore: AngularFirestore
	private static collection: string = "locais"

	public static get(): Observable<Local[]> {
		if (CampusRepository.id) {
			this.locais = this.firestore.collection<Local>(this.collection + "/" + CampusRepository.id).valueChanges()
			return this.locais
		}
		return null
	}

	
}