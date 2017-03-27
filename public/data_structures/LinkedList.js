
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

  findNode(target) {
    let node = this.head;

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

  // If length is known, solution is trivial;
  kthToLastRecursive(k) {
    var index = 0;
    var result = null;

    var findNode = function (node) {
      if(node === null) {
        return 0;
      }
      index += findNode(node.next) + 1;

      if(index === k) {
        result = node;
      }
      return index;
    }
    // returns length
    findNode(this.head);
    // returns kth element
    return result;
  }

  // O(1) space complexity
  kthToLast(k) {
    let p1 = this.head;
    let p2 = this.head;
    let node = this.head;

    // move p1 k positions
    for (var i = 0; i < k; i++) {
      p1 = p1.next;
    }
    // p2 starts at 0, and p1 at k so when p1 hits null, p2 will have moved [length - k] positions
    // i.e kth to last...
    while(p1 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
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
list.appendToTail(2);
list.appendToTail(9);
list.appendToTail(7);


console.log(list.kthToLast(2))
console.log(list)
