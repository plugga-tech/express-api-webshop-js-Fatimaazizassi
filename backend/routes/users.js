const express = require('express');
const router = express.Router();
const mongodb = require('mongodb')

/* GET all users */
router.get('/', function (req, res, next) {
  req.app.locals.db.collection('users').find({}, { projection: { _id: 0}}).toArray()
  .then(results => {
    res.json(results);
  })
})

/* POST - get one user by id */
router.post('/', function (req, res, next) {
  if (req.body.id) {
    const id = new mongodb.ObjectId(req.body.id)
    req.app.locals.db.collection('users').findOne({_id: id})
    .then(results => {
      res.json(results);
    })
  }
})

/* POST/Add new user */
router.post('/add', function(req, res, next){
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(results => {
    res.json(results)
  })
})

/* POST - User login */
router.post('/login', function(req, res, next){
  console.log(req.body.password)
  req.app.locals.db.collection('users').findOne({email: req.body.email})
  .then(results => {
    if (results) {
      if (req.body.password == results.password) {
        res.send(`Hello ${results.name}! You are successfully logged in.`)
      }else{
        res.send('Password incorrect! Please try again.')
      }
    }
    else {
      res.send(`
        Email incorrect! Couldn't find any user with email: ${req.body.email}.
        Please try again.
      `)
    }
  })
})

module.exports = router;
