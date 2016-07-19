import "index.css";

export class Todolist {

  constructor() {
    this.title = "My Todo List!";
    this.items = [];
    this.item  = {text: '', done: false, editMode: false}
  }

  editMode(item, flag){
    item.editMode = flag;
  }

  getClass(item) {
    return {
      completed: item.done,
      editing: item.editMode
    }
  }

  addItem(event) {
    if (event.keyCode === 13) {
      this.items.push(this.item);
      this.item = {};
    }
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

