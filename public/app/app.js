angular.module('myTodoApp', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/signup');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  })
  .state('todo', {
    url: '/todo',
    templateUrl: './app/views/todoView.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: './app/views/loginView.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: './app/views/signupView.html'
  })



  // End of app.js
})
