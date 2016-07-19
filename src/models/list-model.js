
export class ListModel {

  constructor() {
    this.items = [];
  }

  insert(item) {
      this.items.push(item);
  }

  remove(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
