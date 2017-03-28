
class List {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // can receive either a primitive or a node;
  appendToTail(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return node;
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

  startToKth(k) {
    let node = this.head;

    while (k !== 0) {

      node = node.next;
      k--;
    }
    return node;
  }

  deleteMiddleNode() {

    let fast = this.head;
    let slow = this.head;
    let prev = slow;

    while (fast && fast.next !== null) {
      prev = slow;
      fast = fast.next.next;
      slow = slow.next;
    }
    if (slow !== this.head && slow !== this.tail) {
      prev.next = slow.next;
    }
  }

  // no access to head - just copy the next node into the current node!
  deleteNodeNoHeadAccess(node) {
    if(!node || !node.next) {
      return false;
    }
    console.log(node);
    let next = node.next;
    node.value = next.value;
    node.next = next.next;
  }

  print() {
    var arr = [];
    let node = this.head;
    while(node !== null) {
      arr.push(node.value);
      node = node.next;
    }
    console.log(arr)
    return arr;
  }

  length() {
    let node = this.head;
    let len = 0;
    while(node !== null) {
      len++;
      node = node.next;
    }
    return len;
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
list.appendToTail(3);
list.appendToTail(5);
list.appendToTail(8);
list.appendToTail(5);
list.appendToTail(10);
list.appendToTail(2);
list.appendToTail(1);
