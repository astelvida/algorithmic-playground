const Stack = function () {
  const obj = {};
  const storage = {};
  let size = 0;

  obj.push = (item) => storage[size++] = item;

  obj.pop = () => {
    if (obj.isEmpty()) {
      return null;
    }
    size--;
    const popped = storage[size];
    delete storage[size];
    return popped;
  };

  obj.peek = () => storage[obj.size() - 1];

  obj.size = () => size;

  obj.isEmpty = () => !obj.size();

  return obj;
};

// var myStack = Stack();
//
// myStack.push(2);
// myStack.push(1);
// myStack.push(-25);
// myStack.push(3);
// myStack.pop();
// myStack.push(100);
// myStack.pop();

// POP size && size--;
/*
  expression on the right will only execute only if the left evalutes
  to true. So if size === 0, i.e. false size will not be decreased and
  result will be undefined;
*/
