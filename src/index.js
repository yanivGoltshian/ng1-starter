import angular from 'angular';

// define angular module
angular.module('app', [])

  // create a root component
  .component('root', {
      template: `
       <h1>Hello AngularJS!</h1>
      `
  });

// bootstrap the root component
angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});