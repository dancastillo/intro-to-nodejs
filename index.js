const express = require('express');
const app = express();
const key = require('./key');
const randomstring = require('randomstring');
const request = require('request');
let image = '';

const options = {
  uri: 'https://robohash.p.mashape.com/index.php?text=' + randomstring.generate(5),
  headers: {
    'X-Mashape-Key': key.robohash,
    'Accept': 'application/json'
  }
}

request(options, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    image = body.imageUrl;
    console.log(image);
  }
});

app.get('/', (req, res) => {
  res.send(`<img src="${image}" />`)
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
