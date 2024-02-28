const express = require('express')
const app = express()

const port = '3000'
const datbaseName = 'fatima-assi'

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017')
.then(client => {
    console.log('Connected to mongoDB')

    const db = client.db(datbaseName)
    app.locals.db = db
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.listen(port)

module.exports = app;
