const  Sequelize = require("sequelize");

const sequelize = require('./database');

const User = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    food:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false

    },
    foodname:{
        type:Sequelize.STRING,
        allowNull:false
    }

});
module.exports=User;

