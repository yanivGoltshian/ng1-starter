import angular from "angular";

// import views
import {Todolist} from './index';


// create the main module
angular.module('app', [])
  .controller({Todolist});


// go go go!
document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['app']);
});

