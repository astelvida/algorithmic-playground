function Node (value=null) {
  let node = {};
  node.value = value
  node.next = null;
  return node;
}

function sumLists(list1, list2) {
  var num1 = list1;
  var num2 = list2;
  var memo = 0;
  var total = new List();

  while(num1 !== null || num2 !== null) {
    var c = 0;
    let val1 = num1? num1.value : 0;
    let val2 = num2? num2.value : 0;
    let sum = val1 + val2;

    if(sum >= 10) {
      sum = sum - 10;
      c++;
    }

    var node = new Node(sum + memo);
    if(!total.tail) {
      total.tail = node;
    }
    // Insert each node at the head of the list
    node.next = total.head;
    total.head = node;

    memo = c;

    num1 = num1? num1.next: null;
    num2 = num2? num2.next: null;
  }

  return total;
}




const num1 = new List();
num1.appendToTail(7);
num1.appendToTail(1);
num1.appendToTail(6);
num1.appendToTail(3);


const num2 = new List();
num2.appendToTail(5);
num2.appendToTail(9);
num2.appendToTail(2);

console.log(sumLists(num1.head, num2.head));
