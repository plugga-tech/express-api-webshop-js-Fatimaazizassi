# Fatima's API

## Enviroment Requirements
* NodeJS https://nodejs.org/en/download
* MongoDB https://www.mongodb.com/docs/manual/tutorial/
    * Make sure MongoDB is runing `brew services run mongodb-community`

## Get statrted
```
cd PATH/TO/PROJECT
npm install -g nodemon
npm install
nodemon app.js
```
Gå to http://localhost:3000/ on your browser.
Use POSTMAN application or the test-g.rest to test the API.
For the test-g.rest to work, you need Rest-Client (extension) installed for vsc.

## API documentation
* Users
    * GET all users         -> /api/users
    * POST specific user    -> /api/users
    * POST/ADD user         -> /api/users/add 
    * POST Login user       -> /api/users/login
