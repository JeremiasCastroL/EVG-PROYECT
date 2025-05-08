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

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['date', 'DESC']] });
    // const [rows] = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(blogs);
    console.log(blogs)
  } catch (err) {
    res.json(err)
    console.log("getBlog error", err)
  }
}

export const deleteBlogs = async (req, res) => {
  try {
    const { id } = req.params
    const deleteBlog = await Blog.destroy({ where: { id } })
    res.status(200).json({ xd: "Blog eliminado correctamente" })
  } catch (error) {
    res.status(400).json({ xdxd: "Error en delete blog" })
  }
}

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, category, date } = req.body

    if (!req.file) {
      return res.status(400).json({ error: "Imagen no proporcionada" })
    }
    const imageName = req.file.filename

    const parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ errorDate: "Fecha invalida" })
    }

    const updatedBlog = await Blog.update(
      {
        title,
        content,
        category,
        date: parsedDate,
        image: imageName
      }, { where: { id } })

    res.status(200).json({ successfully: "Blog actualizado éxitosamente" })
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el blog" })
  }

}