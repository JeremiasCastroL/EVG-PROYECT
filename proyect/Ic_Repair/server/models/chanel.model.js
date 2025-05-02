import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize('login_node_evg', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const ChannelInfo = sequelize.define("ChannelInfo", {
    logoCanal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nameCanal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    story: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: false
})

export const ChannelVideo = sequelize.define("ChannelVideo", {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

export const ChannelReview = sequelize.define("ChannelReview", {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

sequelize.sync()
    .then(() => console.log('Tabla Channel sincronizada con MySQL'))
    .catch(error => console.error('Error al sincronizar Blog:', error));

