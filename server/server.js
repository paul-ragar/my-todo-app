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

//SESSION AND PASSPORT//

const passport = require('./passport.js')

const isAuthed = (req, res, next) => {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// LOGIN
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// User Endpoints
const userCtrl = require('./controller/userCtrl.js')

app.post('/register', userCtrl.register);
app.get('/user', userCtrl.read);
app.get('/me', isAuthed, userCtrl.me);
app.put('/user/:_id', isAuthed, userCtrl.update);


//TODO
app.post('/post_todo', serverCtrl.post_todo)
app.get('/todos', (req, res) => {
  db.todos.get_todos((err, todos) => {
    res.status(200).send(todos);
  })
});
app.delete('/delete_todos/:todo_id', serverCtrl.delete_todos)
app.put('/update_todo/:todo_id', serverCtrl.update_todo)

//COMPLETES
app.post('/post_completes/:todo_id', serverCtrl.post_completes)
app.get('/get_completes', (req, res) => {
  db.completes.get_completes((err, todos) => {
    res.status(200).send(todos);
  })
})
app.delete('/delete_completes/:complete_id', serverCtrl.delete_completes)





const port = 8000;
app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
