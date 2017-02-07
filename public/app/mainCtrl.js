angular.module('myTodoApp').controller('mainCtrl', function(mainService, $scope, $state) {


//////////////// todoView.html

  $scope.postTodo = (newTodo) => {
    newTodo.todo_date = new Date();
    mainService.postTodo(newTodo).then((response) => {
      if (!response.data) {
        console.warn("There was an error");
      } else {
        // console.log("New Todo Successful");
        $scope.getTodos();
      }
    }).catch((err) => {
      alert("There was an error creating new todo")
    });
  }

  $scope.getTodos = () => {
    mainService.getTodos().then((response) => {
      $scope.todos = response.data;
    })
  };
  $scope.getTodos();

  $scope.updateList = () => {

    var newComplete;
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].checked) {
        newComplete = $scope.todos[i];
        mainService.postCompletes(newComplete).then((response) => {
          // console.log("newComplete data for the delete function", newComplete);
          $scope.getTodos();
          $scope.getCompletes();
        });
      } else {
        continue;
      }
    }

  }

  $scope.getCompletes = () => {
    mainService.getCompletes().then((response) => {
      // console.log("Get Completes: ", response.data);
      $scope.completes = response.data;
    })
  }
  $scope.getCompletes();

  $scope.deleteTodos = (todo) => {
    mainService.deleteTodos(todo).then((response) => {
      // console.log("Delete Successful.");
    })
  }

  $scope.deleteCompletes = (complete) => {
    mainService.deleteCompletes(complete).then((response) => {
      // console.log("Complete Delete Successful");
      $scope.getCompletes();
    })
  }

  $scope.editTodo = (todo) => {
    todo.edit = true;
  }
  $scope.doneEditing = (todo) => {
    console.log(todo);
    mainService.updateTodos(todo).then((response) => {
      console.log("Edit finished, and updated");
      todo.edit = false;

    })
  }


//////////////// signupView.html

  $scope.registerUser = (new_user) => {
    mainService.registerUser(new_user).then((response) => {
      if (!response.data) {
        console.warn("Unable to create new user");
      } else {
        // console.log("You created this new user", response.data);
        $state.go('todo');
      }
    }).catch((err) => {
      alert("Unable to create new user");
    });
  }


//////////////// loginView.html

$scope.login = function(user) {

    mainService.login(user).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('todo');
      }
    }).catch(function(err) {
      console.log("ERROR: ", err);
    });
  };






//////////////// todoView.html


//////////////// todoView.html






  // END OF CONTROLLER
})
