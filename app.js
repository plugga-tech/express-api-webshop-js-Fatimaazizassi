const express = require('express')
const app = express()

const port = '3000'
const datbaseName = 'fatima-assi'

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017')
.then(client => {
    console.log('We are connected to mongoDB')

    const db = client.db(datbaseName)
    app.locals.db = db
})

const indexRouter = require('./backend/routes/index');
const usersRouter = require('./backend/routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

app.listen(port)

module.exports = app;