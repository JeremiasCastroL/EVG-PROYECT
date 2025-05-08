import {Router} from 'express'
// import { authRequired } from '../middlewares/validateToken'
// import { getTask, getTasks, deleteTask, createTask, updateTask } from '../controllers/task.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createTaskSchema } from '../schemas/task.schema.js'
import Blog from '../models/blog.model.js'
import { adminblog } from '../controllers/blog.controller.js'
import multer from 'multer';
const router = Router()
import { upload } from '../middlewares/upload.js'
import { getBlogs } from '../controllers/blog.controller.js'
import { deleteBlogs } from '../controllers/blog.controller.js'
// import { checkAdmin } from '../middlewares/validateAdmin.js'
// import { channelInfo } from '../controllers/channel.controller.js'
import { channelReview } from '../controllers/channel.controller.js'
import { channelVideo } from '../controllers/channel.controller.js'
import { getChannel } from '../controllers/channel.controller.js'
import { getVideo } from '../controllers/channel.controller.js'
import { getReview } from '../controllers/channel.controller.js'
import { deleteVideo } from '../controllers/channel.controller.js'
import { deleteReview } from '../controllers/channel.controller.js'
import { updateVideo } from '../controllers/channel.controller.js'
import { updateReview } from '../controllers/channel.controller.js'
import { updateBlog } from '../controllers/blog.controller.js'


// router.post('/admin/blog', adminblog)
router.post('/admin/blog', upload.single('image'), adminblog);
router.get('/admin/public', getBlogs)
router.delete('/admin/public/:id', deleteBlogs)
router.post("/admin/canal/PostVideo",   upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]), channelVideo)
router.post("/admin/canal/PostReview", upload.single('image'), channelReview)
router.get("/admin/canal", getChannel)
router.get("/admin/canal/video", getVideo)
router.get("/admin/canal/review", getReview)
router.delete("/admin/canal/video/:id", deleteVideo)
router.delete("/admin/canal/review/:id", deleteReview)
router.put("/admin/canal/video/:id", upload.fields([
  { name: "video", maxCount: 1 },
  { name: "image", maxCount: 1 },
]),updateVideo)
router.put("/admin/canal/review/:id", upload.single('image'), updateReview)
router.put("/admin/blog/:id", upload.single('image'), updateBlog)
// router.get('/admin', (req, res) => {
//     res.json({ message: 'Bienvenido al panel de administración' });
// })
// router.get('/tasks/:id', authRequired, getTask)
// router.post('/tasks/',authRequired, validateSchema(createTaskSchema),createTask)
// router.delete('/tasks/:id', authRequired, deleteTask)
// router.put('/tasks/:id', authRequired, updateTask)

export default router