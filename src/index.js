import "index.css";

export class Todolist {

  constructor(ListModel) {
    this.list = ListModel;
    this.title = "My Todo List!";
    this.item  = {text: '', done: false, editMode: false}
    this.items = ListModel.items;
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
      this.list.insert(this.item);
      this.item = {}
    }
  }

  removeItem(item) {
    this.list.remove(this.item);
  }

}

