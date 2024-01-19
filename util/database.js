const mysql = require('mysql2');

const Pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'booking-data',
    password:'Mahakal@00'
})

module.exports = Pool.promise()