angular.module('myTodoApp').controller('mainCtrl', function(mainService, $scope) {


//////////////// todoView.html

  $scope.editing = false;

  $scope.addTodo = (todo) => {
    if (!todo) {
      return false;
    }
    $scope.todoItems = mainService.addTodo(todo);
  }

  $scope.updateList = () => {
    var response = mainService.updateList();
    $scope.todoItems = response[0];
    $scope.completedItems = response[1];
  }

  $scope.getTodoData = () => {
    $scope.todoItems = mainService.todoItems;
    $scope.completedItems = mainService.completedItems;
  }
  $scope.getTodoData();

  $scope.deleteCompleted = (item) => {
    $scope.completedItems = mainService.deleteCompleted(item);
  }

  $scope.editTodo = () => {
    console.log("Edit Todo");
    $scope.editing = true;
  }








  // END OF CONTROLLER
})
