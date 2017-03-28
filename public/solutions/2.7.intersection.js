/*
  Given two singly linked lists, determine if the two lists intersect.
  Return the intering node.
  Note: the intersection is defined by reference and not by value since
   we will be comparing two objects.
   i.e. if the kth node of list1 is the same by reference to jth node
   of list2 than the 2 lists intersect and we can return that node;
*/

function intersection (list1, list2) {

  // if tails are different return immediately
  console.log(list1, list2)
  if (list1.tail !== list2.tail) {
    return null;
  }

  // find length of each array
  len1 = list1.length();
  len2 = list2.length();

  // get the longer one
  let longer = len1 > len2? list1: list2;
  let shorter = len1 <= len2? list1.head: list2.head;

  longer = longer.startToKth(Math.abs(len1 - len2));

  // we need to find where they collide
  while(longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
}


// TODO: add a 'addNode/mergeLists' property on the LinkedList class
var node7 = new Node(7);

var list1 = new List();
list1.appendToTail(1);
list1.appendToTail(2);
list1.appendToTail(3); // this value will be overwritten as we are changing references in list2
list1.tail.next = node7;
list1.tail = node7;

var list2 = new List();
list2.appendToTail(10);
list2.appendToTail(11);
list2.appendToTail(12);
list2.tail.next = node7;
list2.tail = node7;

console.log('Should return Node(7)',intersection(list1, list2));
// console.log('Should return false',intersection(list2, list3));
