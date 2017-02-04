const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const session = require ('express-session');
const massive = require ('massive');

// CONFIG //
const config = require('./config.js');

// EXPRESS //
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

// MASSIVE //
const massiveServer = massive.connectSync({
  connectionString : "postgres://jbsjhrac:-sczgCxVvAbC-wnUDmgNxYO1rt2oBkhL@babar.elephantsql.com:5432/jbsjhrac"
  // connectionString : "postgres://localhost/recipe-box"
});
app.set('db', massiveServer);
const db = app.get('db');

//ENDPOINTS//
const serverCtrl = require('./controller/serverCtrl');

// SIGNUP
app.post('/register_user', serverCtrl.register_user)

//TODO
app.post('/post_todo', serverCtrl.post_todo)
app.get('/todos', (req, res) => {
  db.todos.get_todos((err, todos) => {
    res.status(200).send(todos);
  })
});





const port = 8000;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
