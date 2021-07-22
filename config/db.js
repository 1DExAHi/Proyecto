const { Sequelize } = require('sequelize')

//const PostsModel = require('../models/post');

const sequelize = new Sequelize('someblog', 'root', '', {
    host: "localhost",
    dialect : 'mysql',
    operatorsAliases: false 
  });

//const Post = PostsModel(sequelize, Sequelize)

sequelize.sync({ force:false })
    .then((result) => {
        console.log("Tabla lista")
    }).catch((err) => {
        console.error("Error:"+err)
    });
/*
module.exports = {
    Post
}
*/ 