const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const db = require('./util/database');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));

app.use(userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
