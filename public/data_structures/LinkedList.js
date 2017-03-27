export class List {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendToTail(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  removeHead() {

  }

  deleteNode() {

  }

}

function Node (value=null) {
  let node = {};
  node.value = value
  node.next = null;
  return node;
}


// Tests
var list = new List();
list.appendToTail(1);
list.appendToTail(5);
list.appendToTail(13);
list.appendToTail(7);

console.log(list)
