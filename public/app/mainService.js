angular.module('myTodoApp').service('mainService', function($http) {

////////////////////////// todoView.html

  // this.todoItems = [];
  // this.todoItems = JSON.parse(localStorage.getItem('Todo Data')) || [];
  //
  // this.completedItems = [];
  // this.completedItems = JSON.parse(localStorage.getItem('Completed Data')) || [];
  //
  //
  // this.addTodo = (todo) => {
  //   console.log(todo);
  //   this.todoItems.push(todo);
  //   localStorage.setItem('Todo Data', JSON.stringify(this.todoItems));
  //   return this.todoItems;
  // }
  // this.updateList = () => {
  //   var newCompleted;
  //   for (var i = this.todoItems.length - 1; i >= 0; i--) {
  //     if (this.todoItems[i].checked) {
  //       newCompleted = this.todoItems.splice(i, 1);
  //       this.completedItems.push(newCompleted);
  //     }
  //   }
  //   localStorage.setItem('Todo Data', JSON.stringify(this.todoItems));
  //   localStorage.setItem('Completed Data', JSON.stringify(this.completedItems));
  //   return [this.todoItems, this.completedItems];
  // }
  //
  // this.deleteCompleted = (item) => {
  //   var garbage;
  //   for (var i = 0; i < this.completedItems.length; i++) {
  //     if (item === i) {
  //       this.completedItems.splice(i,1);
  //     }
  //   }
  //   localStorage.setItem('Completed Data', JSON.stringify(this.completedItems));
  //   return this.completedItems;
  // }

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

  this.getTodos = () => {
    return $http({
      method: 'GET',
      url: '/todos'
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

////////////////////////// signupView.html

  this.registerUser = (new_user) => {
    return $http({
      method: 'POST',
      url: '/register_user',
      data: new_user
    }).then((response) => {
      // console.log("MainService: ", response);
      return response;
    });
  };

////////////////////////// loginView.html



////////////////////////// todoView.html




////////////////////////// todoView.html







//END OF SERVICE
})
