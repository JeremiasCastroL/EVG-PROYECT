// import jwt from 'jsonwebtoken';

// export const checkAdmin = (req, res, next) => {
//     const token = req.cookies.token;

//     if (!token) {
//         return res.status(401).json({ message: 'No autorizado, token faltante' });
//     }

//     try {
//         const decoded = jwt.verify(token, 'tu_clave_secreta');

//         if (!decoded.isAdmin) {
//             return res.status(403).json({ message: 'No tienes permisos de administrador' });
//         }

//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Token inválido' });
//     }
// };
