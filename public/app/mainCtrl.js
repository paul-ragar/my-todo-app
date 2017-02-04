angular.module('myTodoApp').controller('mainCtrl', function(mainService, $scope, $state) {


//////////////// todoView.html

  // $scope.editing = false;
  //
  // $scope.addTodo = (todo) => {
  //   if (!todo) {
  //     return false;
  //   }
  //   $scope.todoItems = mainService.addTodo(todo);
  // }
  //

  //
  // $scope.getTodoData = () => {
  //   $scope.todoItems = mainService.todoItems;
  //   $scope.completedItems = mainService.completedItems;
  // }
  // $scope.getTodoData();
  //
  // $scope.deleteCompleted = (item) => {
  //   $scope.completedItems = mainService.deleteCompleted(item);
  // }
  //
  // $scope.editTodo = () => {
  //   console.log("Edit Todo");
  //   $scope.editing = true;
  // }

  $scope.postTodo = (newTodo) => {
    newTodo.todo_date = new Date();
    mainService.postTodo(newTodo).then((response) => {
      if (!response.data) {
        console.log("There was an error");
      } else {
        console.log("New Todo Successful");
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
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].checked) {
        console.log(i, $scope.todos[i] );
        // newCompleted = this.todoItems.splice(i, 1);
        // this.completedItems.push(newCompleted);
      }
    }
    // var response = mainService.updateList();
    // $scope.todoItems = response[0];
    // $scope.completedItems = response[1];
  }

  
//////////////// signupView.html

  $scope.registerUser = (new_user) => {
    mainService.registerUser(new_user).then((response) => {
      if (!response.data) {
        console.log("Unable to create new user");
      } else {
        console.log("You created this new user", response.data);
        $state.go('todo');
      }
    }).catch((err) => {
      alert("Unable to create new user");
    });
  }

//////////////// todoView.html


//////////////// todoView.html


//////////////// todoView.html






  // END OF CONTROLLER
})
