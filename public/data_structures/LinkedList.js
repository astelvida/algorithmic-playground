
class List {

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
    if (list.head === null) {
      return null;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    return currentHead;
  }

  contains(target) {
    this.head = node;
    while(node !== null) {
      if(node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  deleteNode(target) {
    let node = this.head;

    if(node && node.value === target) {
      return this.removeHead();
    }

    while(node.next !== null) {
      if(node.next.value === target) {
        var deleted = node.next;
        node.next = node.next.next;
        // update tail if deeleting the last node;
        if(deleted === this.tail) {
          this.tail = node;
        }
        return deleted;
      }
      node = node.next;
    }
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

list.deleteNode(7);

console.log(list)
