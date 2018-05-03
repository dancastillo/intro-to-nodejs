const express = require('express');
const app = express();
const uc = require('upper-case');

app.get('/', (req, res) => {
  res.send(uc('hello node js'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});