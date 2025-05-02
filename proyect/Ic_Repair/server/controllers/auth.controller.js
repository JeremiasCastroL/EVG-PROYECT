// import user from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';
import { promisify } from 'util';
import connection from '../db.js';
const query = promisify(connection.query).bind(connection);


export const register = async (req, res) => {
    try {
        const { user, name, pass } = req.body;

        const [rows] = await query(
            'SELECT * FROM users WHERE user = ? LIMIT 1',
            [user]
          );
      
          if (Array.isArray(rows) && rows.length > 0) {
            return res.status(400).json(["The email is already in use"]);
          }


        if (!user || !name || !pass) {
            return res.status(400).json(["Todos los campos son obligatorios" ]);
        }

        // 🔹 **1. Verificar si el usuario ya existe**
        const existingUser = await query('SELECT user FROM users WHERE user = ?', [user]);

        if (existingUser.length > 0) {
            return res.status(409).json(["El correo ya está registrado" ]);
        }

        // 🔹 **2. Hashear la contraseña**
        const passwordHash = await bcryptjs.hash(pass, 8);

        // 🔹 **3. Insertar el nuevo usuario en la BD**
        const result = await query('INSERT INTO users SET ?', { user, name, pass: passwordHash });

        console.log("Usuario registrado exitosamente");

        const userData = result.insertId;

        // 🔹 **4. Generar token**
        const token = await createAccessToken({ id: userData });

        // 🔹 **5. Enviar respuesta con token**
        res.cookie('token', token, { httpOnly: true, sameSite: 'Lax',  secure: false, });

        return res.json({
            message: "Usuario registrado con éxito",
            email: user,
            name: name
        });

    } catch (error) {
        console.error("Error en el registro:", error);
        return res.status(500).json(["Error en el servidor" ]);
    }
};

export const login = async (req, res) => {
    try {
        const { user, pass } = req.body;

        if (!user || !pass) {
            return res.status(400).json({ message: "Ingrese un usuario y una contraseña" });
        }

        // Buscar usuario en la base de datos
        const results = await query('SELECT * FROM users WHERE user = ? LIMIT 1', [user]);

        if (results.length === 0) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }

        const userData = results[0];

        console.log("Usuario encontrado:", userData);

        // Comparar la contraseña
        const validPassword = await bcryptjs.compare(pass, userData.pass);

        if (!validPassword) {
            return res.status(401).json({ message: "Correo o contraseña incorrectos" });
        }

        // Si es el admin, agregamos isAdmin: true
        // const isAdmin = user === 'israelcastro2025@gmail.com';

        // Generar token
        const token = await createAccessToken({ id: userData.id});

        // Configurar cookie con el token
        res.cookie('token', token, { httpOnly: true, sameSite: 'Lax',  secure: false });

        return res.json({ message: "Inicio de sesión exitoso", email: user});

    } catch (error) {
        console.error("Error en login:", error);
        return res.status(500).json({ message: "Error en el servidor" });
    }
};

export const logout = async (req, res) => {
        res.cookie('token', "", {
            expires: new Date(0)
        })
        return res.sendStatus(200)
}

export const profile = async (req, res) => {
    try{

        const [rows] = await query('SELECT * FROM users WHERE id = ?', req.user.id);
        console.log(req.user.id)
        
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        
        // res.json(rows[0])
        return res.json({
            "Correo": rows.user,
            "Name": rows.name,
            "rol": rows.rol
        })
    }catch(err){
        console.log(err)
    }
    // res.json(req.cookies.token)
}