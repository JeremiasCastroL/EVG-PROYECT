import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import session from 'express-session';
import connection from './db.js';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/task.routes.js'
import authRoutes from './routes/auth.routes.js'
import blogRoutes from './routes/admin.routes.js';
import termRoutes from './routes/terms&privacy.routes.js'
// import { adminblog } from './controllers/admin.controller.js';

const app = express();

export default app

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type'],
    credentials: true
};  

// ---------------- uses
app.use(morgan('dev'))
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/resources', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser())
app.use('/api', authRoutes)
app.use('/api', taskRoutes)
app.use('/api', blogRoutes)
app.use('/api', termRoutes)


dotenv.config({ path: './env/.env' });

app.set('view engine', 'ejs');


// app.post('/register', async (req, res) => {
//     const { user, name, rol, pass } = req.body;
//     let passwordHash = await bcryptjs.hash(pass, 8);
    
//     connection.query('INSERT INTO users SET ?', { user, name, rol, pass: passwordHash }, (error) => {
//         if (error) {
//             console.log("Error" + error);
//         } else {
//             res.render('register', {
//                 alert: true,
//                 alertTitle: "Registration",
//                 alertMessage: "¡Successfully Registered!",
//                 alertIcon: "success",
//                 showConfirmButton: false,
//                 timer: 1500,
//                 rute: ''
//             });
//         }
//     });
// });

// app.post('/auth', async (req, res) => {
//     const { user, pass } = req.body;
//     if (user && pass) {
//         connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, results) => {
//             if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
//                 res.render('login', {
//                     alert: true,
//                     alertTitle: "Error",
//                     alertMessage: "User or password incorrect",
//                     alertIcon: "error",
//                     showConfirmButton: true,
//                     timer: false,
//                     rute: ''
//                 });
//             } else {
//                 req.session.loggedin = true;
//                 req.session.name = results[0].name;
//                 res.render('login', {
//                     alert: true,
//                     alertTitle: "Connection Successful",
//                     alertMessage: "Login Correcto",
//                     alertIcon: "success",
//                     showConfirmButton: false,
//                     timer: 1500,
//                     rute: ''
//                 });
//             }
//         });
//     } else {
//         res.send("Ingrese una password y un usuario");
//     }
// });

app.get("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
