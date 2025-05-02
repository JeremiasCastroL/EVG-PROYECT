import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crea las carpetas si no existen
const ensureUploadFoldersExist = () => {
  const folders = [
    "uploads/blogs",
    "uploads/videos",
    "uploads/portadas",
    "uploads/reseñas",
    "uploads/otros"
  ];

  folders.forEach(folder => {
    const fullPath = path.join(__dirname, "..", folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
};

ensureUploadFoldersExist();

// Configurar almacenamiento dinámico por fieldname
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/otros"; // default

    switch (file.fieldname) {
      case "blog":
        folder = "uploads/blogs";
        break;
      case "video":
        folder = "uploads/videos";
        break;
      case "image":
        folder = "uploads/portadas";
        break;
      case "reseña":
        folder = "uploads/reseñas";
        break;
      default:
        folder = "uploads/otros";
        break;
    }

    const fullPath = path.join(__dirname, "..", folder);
    cb(null, fullPath);
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

// Validar tipos de archivo
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  const isImage = /\.(jpg|jpeg|png)$/.test(ext) && mime.startsWith("image/");
  const isVideo = /\.(mp4|avi|mov)$/.test(ext) && mime.startsWith("video/");

  console.log(`Archivo recibido: ${file.originalname}`);
  console.log(`Extensión: ${ext}, Tipo MIME: ${mime}`);
  console.log("¿Es imagen?", isImage);
  console.log("¿Es video?", isVideo);

  if (isImage || isVideo) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido"));
  }
};

// Exportar el middleware multer
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // Máx 20MB
  },
});
