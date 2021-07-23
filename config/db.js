const { Sequelize } = require('sequelize')

const PostsModel = require('../models/post');
const CategoriesModel = require('../models/categories')

const sequelize = new Sequelize('someblog', 'root', '', {
    host: "localhost",
    dialect : 'mysql',
    operatorsAliases: false 
  });
 
const Posts = PostsModel(sequelize, Sequelize)
const Categories = CategoriesModel(sequelize, Sequelize)

sequelize.sync({ force:false })
    .then((result) => {
        console.log("Tabla lista")
    }).catch((err) => {
        console.error("Error:"+err)
    });

module.exports = {
    Posts,
    Categories
}