import jwt from 'jsonwebtoken';

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            "secret123",  // 🔹 Usa una variable de entorno para mayor seguridad
            { expiresIn: "1d" },
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            }
        );
    });
}
