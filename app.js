const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const sequelize = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));

app.use(userRoutes);

sequelize
  .sync()
  .then(res => {
    console.log(res);
    console.log('table created successful')
    app.listen(8000, () => {
      console.log(`Server is running on port 8000`);
    });
  })
  .catch(err => {
    console.log(err)
  })


