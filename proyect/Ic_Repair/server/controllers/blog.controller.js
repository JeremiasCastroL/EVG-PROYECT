import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';
import Blog from '../models/blog.model.js'; // Solo importa el modelo

const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export const adminblog = async (req, res) => {
  try {
    const { category, title, content, date } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Imagen no proporcionada" });
    }

    const imageName = req.file.filename;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: "Fecha inválida" });
    }

    const newBlog = await Blog.create({
      title,
      content,
      category,
      image: imageName,
      date: parsedDate
    });

    res.json({ message: "Blog creado con éxito", blog: newBlog });
  } catch (error) {
    console.error("❌ Error al crear la tarea:", error);
    res.status(500).json({ error: "Error al crear el blog" });
  }
};

