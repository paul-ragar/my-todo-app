const app = require('../server.js');
const db = app.get('db');

  module.exports = {
    register_user: (req, res, next) => {
      db.users.post_user([req.body.username, req.body.password, req.body.first_name, req.body.last_name], (err, register_user) => {
        res.status(200).send(register_user);
      });
    },
    post_todo: (req, res, next) => {
      db.todos.post_todo([req.body.todo_title, req.body.todo_description, req.body.todo_date], (err, post_todo) => {
        res.status(200).send(post_todo);
      });
    }
  };
