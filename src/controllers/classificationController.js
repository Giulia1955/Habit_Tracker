import Classification from "../models/classification.js";

class ClassificationController {
    static async listClassifications(req, res) {
        try {
            const classifications = await Classification.find();
            res.status(200).json(classifications);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - request failure`
            });
        }
    }

    static async listClassificationById(req, res) {
        try {
            const { id } = req.params;
            const classification = await Classification.findById(id);
            res.status(200).json(classification);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - classification request failure`
            });
        }
    }

    static async updateClassification(req, res) {
        try {
            const { id } = req.params;
            await Classification.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "the classification was updated"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - classification update failure`
            });
        }
    }

    static async createClassification(req, res) {
        try {
            const newClassification = await Classification.create(req.body);
            res.status(201).json({
                message: "classification registered",
                classification: newClassification
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - error on register of the classification`
            });
        }
    }

    static async deleteClassification(req, res) {
        try {
            const { id } = req.params;
            await Classification.findByIdAndDelete(id);
            res.status(200).json({
                message: "the classification was deleted"
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - classification delete failure`
            });
        }
    }
}

export default ClassificationController;