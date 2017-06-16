var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.send('Hello Home Page');
});
app.get('/login', (req, res) => {
  res.send(`<h1>Log In Please</h1>`);
});

app.listen(3000, () =>{
  console.log(`connect 3000 port`);
});
