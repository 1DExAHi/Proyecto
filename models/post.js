const { DataTypes } = require('sequelize')

module.exports = (sequelize, type) => {
    return sequelize.define('posts',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tittle:{
            type: DataTypes.STRING,
        },
        content:{
            type: DataTypes.STRING,
        },
        image:{
            type: DataTypes.STRING,
        }, 
        category: {
            type: DataTypes.INTEGER
        },
        createDate: {
            type: DataTypes.DATEONLY
        }
    })
}