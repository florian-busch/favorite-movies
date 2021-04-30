const express = require('express');

const bodyparser = require('body-parser');
const fetch = require('node-fetch');

//for dev allow cors
const cors = require('cors')

const app = express();

const IP = "127.0.0.1";
const port = process.env.PORT || 3000;

//TODO: move api-key later to db and delete app.use(cors())
app.use(cors())
const api_key = '15fd32e1d33b8d3265394d2b6f5a90ca';


app.use(express.static(__dirname));
app.use(bodyparser.json())

//app.get('/*', (req, res) => {res.sendFile(path.join(__dirname))});

//TODO: enable search via parameter
app.post('/movies', async function(req, res) {

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${req.body.movieQuery}`;
  const movies = fetch(url)
  .then(res => res.json())

  res.send(await movies)
})

app.listen(port, IP, () => {
  console.log(`Server running at http://${IP}:${port}/`)});