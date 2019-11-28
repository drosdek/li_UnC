import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
class Campus {

	private nome: String
	private id: String
	private descricao: String

	constructor(nome, descricao, id = null) {
		this.nome = nome
		this.descricao = descricao
		this.id = id
	}

}

class CampusRepository {

	private campus: Observable<Campus>
	private collection: String = "campus"
	private firestore: AngularFirestore

	constructor() { }

	public get(): Observable<Campus> {
		this.campus = this.firestore.collection(this.collection).valueChanges()
		return this.campus
	}

}