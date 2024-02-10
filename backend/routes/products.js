const express = require('express');
const router = express.Router();
const mongodb = require('mongodb')

/* GET all products */
router.get('/', function (req, res, next) {
  req.app.locals.db.collection('products').find({}, { projection: { _id: 0}}).toArray()
  .then(results => {
    res.json(results);
  })
})

/* POST - get one product by id */
router.post('/', function (req, res, next) {
  if (req.body.id) {
    const id = new mongodb.ObjectId(req.body.id)
    req.app.locals.db.collection('products').findOne({_id: id})
    .then(results => {
      res.json(results);
    })
  }
})

/* POST/Add new product */
router.post('/add', function(req, res, next){
  req.app.locals.db.collection('products').insertOne(req.body)
  .then(results => {
    res.json(results)
  })
})

module.exports = router;
