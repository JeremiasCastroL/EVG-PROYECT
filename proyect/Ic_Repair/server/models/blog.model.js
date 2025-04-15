import { Sequelize, DataTypes } from "sequelize";

function xd(){

    console.log("blog")
}

xd()
export const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'blogs',
    timestamps: true
})


sequelize.sync()
    .then(() => console.log('Tabla Blog sincronizada con MySQL'))
    .catch(error => console.error('Error al sincronizar Blog:', error));

export default Blog;
