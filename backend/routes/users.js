var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.app.locals.db.collection('users').find().toArray()
  .then(results => {
    let printUsers = `
      <div>
        <h2>All users</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
    `

    for(user in results) {
      printUsers += `
        <tr>
          <td>${results[user].name}</td>
          <td>${results[user].email}</td>
        </tr>
      `
    }

    printUsers += `
        </table>
      </div>       
    `

    res.send(printUsers);
  })
});

/* Add new user form */
router.get('/add', function(req, res, next){
  const form = `
    <form action="addNewUser" method="POST">
      <input type="text" name="name" placeholder="Jon Doe"><br>
      <input type="email" name="email" placeholder="jon.doe@email.com"><br>
      <input type="password" id="passwoord" name="password"><br><br>

      <button type="submit">Add user</button>
    </form> 
  `

  res.send(form)
})
/* Post/Add new user */
router.post('/addNewUser', function(req, res){
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(results => {
    res.send(`
      Successfully added <strong>${req.body.name}</strong> as new user 🎉.<br>
      Click to see -> <a href="/api/users">all users</a>.
    `)
  })
})

/* User login form */
router.get('/login', function(req, res, next){
  const form = `
    <form action="loginUser" method="POST">
      <input type="email" name="email" placeholder="jon.doe@email.com"><br>
      <input type="password" id="passwoord" name="password"><br><br>

      <button type="submit">Login</button>
    </form> 
  `

  res.send(form)
})
/* Login user */
router.post('/loginUser', function(req, res){
  res.send('Hello! You are Successfully logged in 🎉.' )
})

module.exports = router;
