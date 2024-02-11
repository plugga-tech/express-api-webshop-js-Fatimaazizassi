const express = require('express');
const router = express.Router();
const mongodb = require('mongodb')

/* GET all orders */
router.get('/all', function (req, res, next) {
  req.app.locals.db.collection('orders').find().toArray()
  .then(results => {
    res.json(results);
  })
})

/* POST/Add new order */
router.post('/add', function(req, res, next){
  const products = req.body.products

  if (products) {
    for (p in products) {
      /* Edit quantity of the prroduct lager */
      editProductLagerQuantity(req, products[p].productId, products[p].quantity)
    }

    req.app.locals.db.collection('orders').insertOne(req.body)
    .then(results => {
      res.json(results)
    })
  }
})

function editProductLagerQuantity(req, pId, pCu) {
  const id = new mongodb.ObjectId(pId)
  req.app.locals.db.collection('products').updateOne({_id: id}, { $inc: { lager: -pCu }})
}

module.exports = router;
