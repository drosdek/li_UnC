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

class CampusRepository {

	private static campus: AngularFirestoreDocument<Campus>
	private static id: string; 
	private static collection: string = "campus"
	private static firestore: AngularFirestore

	constructor(id: string = null) {
		CampusRepository.id = id 
	}

	public static get(): AngularFirestoreDocument<Campus> {
		if (CampusRepository.id) {
			this.campus = CampusRepository.firestore.collection(this.collection).doc<Campus>(CampusRepository.id);
			return this.campus
		}
		return null
	}

}