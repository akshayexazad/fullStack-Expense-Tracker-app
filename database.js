const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bookanapointment','root','Akshay@123',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;