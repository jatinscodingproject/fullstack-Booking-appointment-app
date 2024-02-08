const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const sequelize = require('./util/database');
const cors = require('cors');

app.use(cors())

app.use(express.json())

app.use(express.static('public'));

app.use(userRoutes);

sequelize
  .sync()
  .then(res => {
    console.log('table created successful')
    app.listen(8000, () => {
      console.log(`Server is running on port 8000`);
    });
  })
  .catch(err => {
    console.log(err)
  })


