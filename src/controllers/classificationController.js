import Classification from "../models/classification.js";

class ClassificationController {

  static listarClassifications = async (req, res) => {
    try {
      const classificationsResultado = await Classification.find();
      res.status(200).json(classificationsResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  }

  static listarClassificationPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const classificationResultado = await Classification.findById(id);

      res.status(200).send(classificationResultado);
    } catch (erro) {
      res.status(400).send({ message: `${erro.message} - Id da Classification não localizada.` });
    }
  }

  static cadastrarClassification = async (req, res) => {
    try {
      let classification = new Classification(req.body);

      const classificationResultado = await classification.save();

      res.status(201).send(classificationResultado.toJSON());
    } catch (erro) {
      res.status(500).send({ message: `${erro.message} - falha ao cadastrar Classification.` });
    }
  }

  static atualizarClassification = async (req, res) => {
    try {
      const id = req.params.id;

      await Classification.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Classification atualizada com sucesso" });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

  static excluirClassification = async (req, res) => {
    try {
      const id = req.params.id;

      await Classification.findByIdAndDelete(id);

      res.status(200).send({ message: "Classification removida com sucesso" });
    } catch (erro) {
      res.status(500).send({ message: erro.message });
    }
  }

}

export default ClassificationController;
