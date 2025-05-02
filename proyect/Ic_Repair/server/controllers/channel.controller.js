import { ChannelVideo } from "../models/chanel.model.js";
import { ChannelReview } from "../models/chanel.model.js";
import { ChannelInfo } from "../models/chanel.model.js";

export const channelVideo = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    if (!req.files || !req.files.video || !req.files.image) {
      return res.status(400).json({ message: "Archivos no proporcionados" });
    }

    const videoName = req.files.video[0].filename;
    const imageName = req.files.image[0].filename;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: "Fecha inválida" });
    }

    const newVideo = await ChannelVideo.create({
      title,
      description,
      video: videoName,
      image: imageName,
      date: parsedDate,
    });

    res.json({ message: "Video subido con éxito", video: newVideo });
  } catch (err) {
    console.log("Error en ChannelVideo:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getChannel = async (req, res) => {
  try {
    const channel = await ChannelInfo.findAll({ order: [['updated_at', 'DESC']] });
    // const [rows] = await db.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(channel);
    console.log(channel)
  } catch (err) {
    res.json(err)
    console.log("Get channel error", err)
  }
}

export const getVideo = async (req, res) => {
  try {
    const videos = await ChannelVideo.findAll({ order: [['date', 'DESC']] })

    res.json(videos)

  } catch (error) {
    res.json(error);
    console.log('Get channel error', error)
  }
}

export const getReview = async (req, res) => {
  try {

    const reviews = await ChannelReview.findAll({ order: [['date', 'DESC']] })

    res.json(reviews)

  } catch (err) {
    res.json(err)
    console.log(err)
  }
}

export const channelReview = async (req, res) => {
  try {
    const { name, content, date } = req.body

    if (!req.file) {
      return res.status(400).json({ message: "Video no proporcionada" });
    }

    const imageName = req.file.filename;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: "Fecha inválida" });
    }

    const newReview = await ChannelReview.create({
      content,
      author: name,
      image: imageName,
      date: parsedDate
    })

    res.json({ message: "Review creado con éxito", review: newReview })

  } catch (err) {
    console.log(err)
  }
}

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params
    const videoDeleted = await ChannelVideo.destroy({ where: { id } })
    res.status(200).json({ video: "video eliminado correctamente" })

  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }
}

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const reviewDeleted = await ChannelReview.destroy({ where: { id } })
    res.status(200).json({ review: "Review eliminado correctamente" })
  } catch (err) {
    res.status(400).json(err)
    console.log("error al eliminar video", err)
  }
}

export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params
    const {title, description, date} = req.body

    const videoName = req.files.video[0].filename;
    const imageName = req.files.image[0].filename;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: "Fecha inválida" });
    }

    const updateVideos = await ChannelVideo.update({
      title,
      description,
      video: videoName,
      image: imageName,
      date: parsedDate,
    }, {where: {id}});

    res.status(200).json({ video: "El video fue actualizado exitosamente." })
  } catch (err) {
    res.status(400).json({ error: "Hubo un error en el servidor al guardar la actualizacion de video" })
    console.log(err)
  }
}

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params
    const { name, content, date } = req.body

    const imageName = req.file.filename;

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: "Fecha inválida" });
    }

    const updateReviews = await ChannelReview.update({
      content,
      author: name,
      image: imageName,
      date: parsedDate
    }, { where: { id } })

    res.status(200).json({ review: "La reseña fue actualizada exitosamente" })
  } catch (err) {
    res.status(400).json({ error: "Hubo un error al actualizar la Reseña" })
  }
}
