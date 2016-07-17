import angular from "angular";
import "index.css";

class Todolist {

  constructor($scope) {
    this.title = "My Todo List!";
    this.items = [];
    this._item = '';
  }

  get item(){
    return this._item;
  }

  set item(value) {
    this._item = value;
  }

  addItem(item) {
    this.items.push(item);
    this.item = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

angular.module('app', [])
  .controller({Todolist});


document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['app']);
});
