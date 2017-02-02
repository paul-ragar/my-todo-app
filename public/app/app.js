angular.module('myTodoApp', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/todo');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  })
  .state('todo', {
    url: '/todo',
    templateUrl: './app/views/todoView.html'
  })




  // End of app.js
})
