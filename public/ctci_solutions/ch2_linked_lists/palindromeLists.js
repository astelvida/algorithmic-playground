// ITERATIVE APPROACH
function palindromeLists(list) {
  let p1 = list.head;
  let str1 = '';
  while (p1 !== null) {
    str1 += p1.value;
    p1 = p1.next;
  }
  for(var i = 0; i < Math.floor(str1.length/2); i++) {
    if(str1[i] !== str1[str1.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// IMPLEMENTATION USING A STACK & 'RUNNERS'
function palindromeLists(list) {
  let fast = list.head;
  let slow = list.head;
  const stack = [];

  while(fast && fast.next !== null) {
    stack.push(slow.value);
    fast = fast.next.next;
    slow = slow.next;
  }

  // handle case for odd list length by moving slow pointer one position further, so we can start at the correct reversed element
  if (fast !== null) {
    slow = slow.next;
  }
  while(slow !== null) {
    if(!(stack.pop() === slow.value)) {
      return false;
    }
    return true;
  }

  return stack;
}


var list1 = new List();
list1.appendToTail('a');
list1.appendToTail('b');
list1.appendToTail('c');
list1.appendToTail('b');
list1.appendToTail('a');
console.log('Should return %ctrue', 'color: green',palindromeLists(list1));


var list2 = new List();
list2.appendToTail('a');
list2.appendToTail('b');
list2.appendToTail('c');
list2.appendToTail('d');
list2.appendToTail('a');
console.log('Should return %cfalse', 'color: green', palindromeLists(list2));
