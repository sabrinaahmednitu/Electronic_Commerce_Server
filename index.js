const express = require('express');
const app = express();

 port = process.env.PORT || 5000;
 port = process.env.PORT || 5000;

const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('hello world from electronic web');
});

app.listen(3000);
