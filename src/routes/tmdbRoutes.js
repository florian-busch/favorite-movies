const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const secrets = require('../config/secrets');

//TODO: enable search via parameter
router.post('/movies', async function(req, res) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${secrets.api_key}&query=${req.body.movieQuery}`;
  const movies = fetch(url)
    .then(res => res.json())

  res.send(await movies)
});

router.post('/movieByID', async function (req, res) {
  const url = `https://api.themoviedb.org/3/movie/${req.body.id}?api_key=${secrets.api_key}`;
  const movie = fetch(url)
    .then(res => res.json())

  res.send(await movie)
});

module.exports = router;