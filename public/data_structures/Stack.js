function Stack() {
  const obj = {};
  const storage = {};
  let size = 0;

  obj.push = (item) => {
    storage[size++] = item;
  };

  obj.pop = () => {
    size && size--;
    const popped = storage[size];
    delete storage[size];
    return popped;
  };

  obj.peek = () => storage[obj.size() - 1];

  obj.size = () => size;

  obj.isEmpty = () => !obj.size();

  return obj;
}

// const stack = Stack();
//
// stack.push(2);
// stack.push(1);
// stack.push(-25);
// stack.push(3);
// stack.pop();
// stack.push(100);
// stack.pop();

// POP size && size--;
/*
  expression on the right will only execute only if the left evalutes
  to true. So if size === 0, i.e. false size will not be decreased and
  result will be undefined;
*/
