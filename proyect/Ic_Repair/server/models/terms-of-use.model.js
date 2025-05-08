import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Terms = sequelize.define('Terms', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'terms',
    timestamps: true
})

sequelize.sync()
    .then(() => console.log("Tabla Terms sincronizada con éxito"))
    .catch(err => console.error("Error al crear tabla Terms", err))

export default Terms