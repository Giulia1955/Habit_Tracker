import Tasks from "../models/task.js";

class TaskController {

  static listarTasks = async (req, res) => {
    try {
      const tasksResultado = await Tasks.find()
        .populate("classification")
        .exec();

      res.status(200).json(tasksResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  }

  static listarTaskPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const taskResultado = await Tasks.findById(id)
        .populate("classification")
        .exec();

      res.status(200).send(taskResultado);
    } catch (erro) {
      res.status(400).send({ message: `${erro.message} - Id da task não localizado.` });
    }
  }

  static cadastrarTask = async (req, res) => {
    try {
      let task = new Tasks(req.body);

      const taskResultado = await task.save();

      res.status(201).send(taskResultado.toJSON());
    } catch (erro) {
      res.status(500).send({ message: `${erro.message} - falha ao cadastrar task.` });
    }
  }

  static atualizarTask = async (req, res) => {
    try {
      const id = req.params.id;

      await Tasks.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Task atualizada com sucesso" });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  static excluirTask = async (req, res) => {
    try {
      const id = req.params.id;

      await Tasks.findByIdAndDelete(id);

      res.status(200).send({ message: "Task removida com sucesso" });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  static listarTaskPorCor = async (req, res) => {
    try {
      const color = req.query.color;

      const tasksResultado = await Tasks.find({
        "classification.color": color
      });

      res.status(200).send(tasksResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  }

}

export default TaskController;
