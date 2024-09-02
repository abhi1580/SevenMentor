const express = require('express');

const pug = require('pug');

const app = express();

app.set('view engine', 'pug');

app.set('views', '../views');

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Hello',
    message: 'Hello Welcome to Templating Engine-PUG',
  });
});

app.listen(4000, () => {
  console.log('PUG express server started on port no 4000');
});
