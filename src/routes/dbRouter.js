const express = require('express');
const router = express.Router();

const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').ObjectID;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'favoritesDB';
const client = new MongoClient(mongoURL);

//Save one Movie to db
router.post('/saveOne', function (req, res) {
  client.connect(function(err) {
    assert.strictEqual(null, err);
    const db = client.db(dbName);

    const collection = db.collection('favoritesDB')
    collection.insertOne({
      title: req.body.title,
      overview: req.body.overview,
      release_date: req.body.release_date,
      adult: req.body.adult,
      poster_path: req.body.poster_path,
      added: new Date(),
    });
    });
    res.status(200).send({message: 'Movie added'})
});

//get array of favorite movies
router.get('/favorites', function(req, res) {
  client.connect(function(err) {
    assert.strictEqual(null, err);
    const db = client.db(dbName);

    const collection = db.collection('favoritesDB');
    collection.find().toArray(function(err, docs) {
      assert.strictEqual(err, null);
      res.send(docs)
    });
});
});

//delete one movie from db **uses post because angulars http.delete cannot transport body
router.post('/deleteOneMovie', function(req, res) {
  client.connect(function(err) {
    assert.strictEqual(null, err);
    const db = client.db(dbName);

    const collection = db.collection('favoritesDB');
    collection.deleteOne({ _id: objectID(req.body._id)}, function(err, docs) {
      assert.strictEqual(err, null);
      res.send({message: 'Movie deleted from Favorite List'});
    })
  })
});

module.exports = router;