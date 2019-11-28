class Campus {

    private nome: String
    private id: String
    private descricao: String

    constructor(nome, descricao, id=null) {
        this.nome = nome
        this.descricao = descricao
        this.id = id
    }

}

class CampusRepository {
    
    private list_campus: Array<Campus>

    constructor() {}
}