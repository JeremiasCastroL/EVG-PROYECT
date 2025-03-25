import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'login_node_evg'
})

connection.connect((error) => {
    if(error){
        console.log("No se pudo conectar a la DB, Motivo:"+error)
        return;
    }
    console.log("Conectado a la base de datos con exito")
})

export default connection