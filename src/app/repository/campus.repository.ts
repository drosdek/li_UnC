import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

class Campus {

	private nome: string
	private id: string
	private descricao: string

	constructor(nome, descricao, id = null) {
		this.nome = nome
		this.descricao = descricao
		this.id = id
	}

}

export class CampusRepository {

	private static campus: AngularFirestoreDocument<Campus>
	public static id: string; 
	private static collection: string = "campus"
	private static firestore: AngularFirestore

	constructor(id: string = null) {
		CampusRepository.id = id 
	}

	public static get(): AngularFirestoreDocument<Campus> {
		if (CampusRepository.id) {
			this.campus = this.firestore.collection(this.collection).doc<Campus>(this.id)
			return this.campus
		}
		return null
	}

}