
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
    if (this.head === null) {
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
        return node;
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
        // update tail if deleting the last node;
        if(deleted === this.tail) {
          this.tail = node;
        }
        return deleted;
      }
      node = node.next;
    }
    // if there is no such node return false;
    return false;
  }


  removeDuplicates() {
    // use an object for fast lookup
    let lookup = {};
    let node = this.head;
    let prev;

    while(node !== null) {
      if(!(node.value in lookup)) {
        lookup[node.value] = true;
        prev = node;
      } else {
        prev.next = node.next;
        if (node === this.tail) {
          this.tail = prev;
        }
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
list.appendToTail(7);
list.appendToTail(5);
list.appendToTail(7);
list.appendToTail(13);
list.appendToTail(7);
list.appendToTail(7);

list.removeDuplicates();

console.log(list)
