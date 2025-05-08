import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Privacy = sequelize.define('Privacy', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'privacy',
    timestamps: true
})

sequelize.sync()
    .then(() => console.log('Tabla Privacy sincronizada exitosamente'))
    .catch(err => console.error('Error al sincronizar tabla Privacy ', err))

export default Privacy