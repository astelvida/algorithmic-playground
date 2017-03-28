// Partition a list around a value;
function partition(list, n) {
  var node = list.head;
  var front = new List();
  var end = new List();

  while(node !== null) {
    if(node.value >= 5) {
      end.appendToTail(node.value);
    } else {
      front.appendToTail(node.value);
    }
    node = node.next;
  }
  // join front and end;
  front.tail.next = end.head;
  front.tail = end.tail;

  return front;
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
console.log('Result',partition(list, 5))
