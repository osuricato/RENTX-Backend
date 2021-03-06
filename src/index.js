const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/routes')(app);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on PORT 3333!');
});