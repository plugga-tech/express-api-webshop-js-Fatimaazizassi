const express = require('express');
const router = express.Router();

/* GET all orders */
router.get('/all', function (req, res, next) {
  req.app.locals.db.collection('orders').find().toArray()
  .then(results => {
    res.json(results);
  })
})

/* POST/Add new order */
router.post('/add', function(req, res, next){
  req.app.locals.db.collection('orders').insertOne(req.body)
  .then(results => {
    res.json(results)
  })
})

module.exports = router;
