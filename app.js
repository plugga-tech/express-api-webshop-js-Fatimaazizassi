const express = require('express')
const app = express()

const port = '3000'

const indexRouter = require('./backend/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port)

module.exports = app;