import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {userId: req.user.id}
        }); // Obtiene todas las tareas sin filtrar por usuario
        res.json(tasks);
    } catch (error) {
        console.error("❌ Error al obtener las tareas:", error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        
        const newTask = await Task.create({
            title,
            description,
            date,
            userId: req.user.id  // Debe coincidir con la base de datos
        });
        res.json(req.body);
    } catch (error) {
        console.error("❌ Error al crear la tarea:", error);
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.destroy({ where: { id: req.params.id } });
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.update(req.body, { 
            where: { id: req.params.id } 
        });
        if (!updatedTask[0]) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task updated" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};
