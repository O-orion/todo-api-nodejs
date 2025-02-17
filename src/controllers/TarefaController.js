
class TarefaController {

    get(req, res) {
        res.status(200).json({status: "sucesso", dados: tarefas})
    }

    getById(req, res) {

    }

    post(req, res) {

    }

    put(req, res) {

    }

    delete(req, res) {

    }

}

export default new TarefaController();
