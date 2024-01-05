const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user');
const sequelize = require('./util/database');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.use('/user',userRoutes);

async function initiate(){
    try{
        await sequelize.sync();
        app.listen(3000)
    }catch(err){
        console.log(err)
    }
}
initiate();