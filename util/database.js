const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-data','root','Mahakal@00',{
    dialect:'mysql',
    host:'localhost'
})

module.exports =  sequelize;