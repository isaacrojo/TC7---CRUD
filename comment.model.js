const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;
const {sequelize} = require('../config/db');

// Crear el modelo (tabla)
class Comment extends Model {};

Comment.init({
    // Agregar columna name
    username: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },
    content: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },

}, {
    // Conexión (requerida)
    sequelize,
    // Renombrar tabla a minúsculas (opcional)
    modelName: 'comment',
});

module.exports = {Comment};