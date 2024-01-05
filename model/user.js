const  Sequelize = require('sequelize');

const sequelize = require('../util/database');

const user = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:true,
        primaryKey:true
    },
    uname:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    uemail:{
        type:Sequelize.STRING,
        allowNull:false
    },
    uphone:{
        type:Sequelize.STRING,
        allowNull:false

    },

})

module.exports = user