/*
  Given a circular linkedlist, implement an algorithm that returns
  the node at the beginning of the loop
*/

function loopDetection (list1, list2) {


}

// TODO: add a 'addNode/mergeLists' property on the LinkedList class
var node7 = new Node(7);

var list1 = new List();
list1.appendToTail(1);
list1.appendToTail(2);
list1.appendToTail(3);
list1.tail.next = node7; // here is where the loop begins
list1.tail = node7;
list1.appendToTail(100);
list1.appendToTail(101);
list1.tail.next = node7;


var list2 = new List();
list2.appendToTail(10);
list2.appendToTail(11);
list2.appendToTail(12);

console.log('Should return Node(7)',loopDetection(list1));
console.log('Should return false',loopDetection(list2));
