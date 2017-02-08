angular.module('myTodoApp').service('mainService', function($http) {

////////////////////////// todoView.html

  this.postTodo = (newTodo) => {
    return $http({
      method: 'POST',
      url: '/post_todo',
      data: newTodo
    }).then((response) => {
      // console.log("MainService: ", response);
      return response;
    });
  };

  this.getTodos = (user_id) => {
    return $http({
      method: 'GET',
      url: '/todos/' + user_id
    }).then((response) => {
      return response;
    });
  };

  this.postCompletes = (newComplete) => {
    newComplete.complete_end_date = new Date();
    return $http({
      method: 'POST',
      url: '/post_completes/' + newComplete.todo_id,
      data: newComplete
    }).then((response) => {
      return response;
    })
    // console.log("From the mainService: ", newComplete);
  }

  this.getCompletes = () => {
    return $http({
      method: 'GET',
      url: '/get_completes'
    }).then((response) => {
      return response;
    })
  }

  this.deleteTodos = (todo) => {
    // console.log("mainService todo Delete", todo.todo_id);
    return $http({
      method: 'DELETE',
      url: '/delete_todos/' + todo.todo_id
    }).then((response)  => {
      return response;
    })
  }

  this.deleteCompletes = (complete) => {
    // console.log("MainService complete delete: ",complete.complete_id);
    return $http({
      method: 'DELETE',
      url: '/delete_completes/' + complete.complete_id
    }).then((response) => {
      return response;
    })
  }

  this.updateTodos = (todo) => {
    return $http({
      method: 'PUT',
      url: '/update_todo/;' + todo.todo_id,
      data: {
        todo_title: todo.todo_title,
        todo_description: todo.todo_description
      }
    }).then((response) => {
      return response;
    })
  }

////////////////////////// signupView.html

  this.registerUser = (new_user) => {
    return $http({
      method: 'POST',
      url: '/register',
      data: new_user
    }).then((response) => {
      // console.log("MainService: ", response);
      return response;
    });
  };

////////////////////////// AUTHSERVICE

this.login = function(user) {
    return $http({
      method: 'post',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then(function(response) {
      return response;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    })
  };

  this.registerUser = function(user) {
    return $http({
      method: 'POST',
      url: '/register',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.editUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: "/user/" + id,
      data: user
    }).then(function(response) {
      return response;
    });
  };

  //USERSERVICE//
  this.getUser = function() {
    return $http({
      method: 'GET',
      url: '/user'
    }).then(function(response) {
      return response;
    });
  };

  this.getUserById = function(id) {
    return $http({
      method: 'GET',
      url: '/user?_id=' + id
    }).then(function(response) {
      return response;
    });
  };




////////////////////////// todoView.html




////////////////////////// todoView.html







//END OF SERVICE
})
