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


// router.post('/admin/blog', adminblog)
router.post('/admin/blog', upload.single('image'), adminblog);

// router.get('/tasks/:id', authRequired, getTask)
// router.post('/tasks/',authRequired, validateSchema(createTaskSchema),createTask)
// router.delete('/tasks/:id', authRequired, deleteTask)
// router.put('/tasks/:id', authRequired, updateTask)

export default router