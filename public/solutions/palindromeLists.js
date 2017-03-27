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
// console.log('Should return %cfalse', 'color: green', palindromeLists(list2));
