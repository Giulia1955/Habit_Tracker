import Tasks from "../models/task.js"

class TaskController{
    static async listTask (req, res) {
        try {
            const tasks = await Tasks.find(); 
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message:` ${error.message} - request failure` });
        }
    }

    static async listIdTask (req, res) {
        try {
            const id = req.params.id;
            const foundTask = await Tasks.findById(id); 
            res.status(200).json(foundTask);
        } catch (error) {
            res.status(500).json({ message:` ${error.message} - task request failure` });
        }
    }

    static async updateTask (req, res) {
        try {
            const id = req.params.id;
            await Tasks.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ message: "the taks was updated"});
        } catch (error) {
            res.status(500).json({ message:` ${error.message} - task update failure` });
        }
    }

    static async createTask(req, res){
        try{
            const newTask = await Tasks.create(req.body);
            res.status(201).json({ message: "task registered", task : newTask});
        } catch (error){
            res.status(500).json({ message:` ${error.message} - error on register of the task` });
        }
        
    }

    static async deleteTask (req, res) {
        try {
            const id = req.params.id;
            await Tasks.findByIdAndDelete(id); 
            res.status(200).json({ message: "the task was deleted"});
        } catch (error) {
            res.status(500).json({ message:` ${error.message} - task delete failure` });
        }
    }

    static async searchByColor(req, res) {
        const { color } = req.query;

        try {
            const tasks = await Tasks.find({
                "classification.color": color
            });

            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - there was a failure on color search`
            });
        }
}

};

export default TaskController;