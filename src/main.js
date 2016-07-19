import angular from "angular";

// import views
import {Todolist} from './index';

// import services
import {ListModel} from "./models/list-model";


// create the main module
angular.module('app', [])

  .controller('Todolist', Todolist)

  .service('ListModel', ListModel);


// go go go!
document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['app']);
});

