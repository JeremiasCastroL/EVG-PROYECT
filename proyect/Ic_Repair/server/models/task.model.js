import { Sequelize, DataTypes } from 'sequelize';
console.log("xdxdxd")
// Conectar a MySQL
const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definir el modelo (equivalente al esquema en Mongoose)
const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    userId: { 
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tasks',
    timestamps: true // Esto agrega createdAt y updatedAt automáticamente
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => console.log('Tabla Task sincronizada con MySQL'))
    .catch(error => console.error('Error al sincronizar:', error));

export default Task;



// import moongoose from 'mongoose'

// const taskSchema = new moongoose.Schema({
//     tittle: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     user: {
//         type: moongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true       
//     }
// }, {
//     timeStamps: true
// });

// export default moongoose.model('Task', taskSchema)