/*
  3.2. Implement a min method on Stack data structure
*/

function StackMin() {
  const obj = {};
  const storage = {};
  const min_storage = {};
  let min = Number.MAX_SAFE_INTEGER;
  let size = 0;

  obj.push = (item) => {
    storage[size] = item;
    if (item < min) {
      min = item;
    }
    min_storage[size] = min;
    size++;
  };

  obj.pop = () => {
    size && size--;
    const popped = storage[size];
    delete storage[size];
    delete min_storage[size];
    return popped;
  };

  obj.size = () => size;

  obj.isEmpty = () => !obj.size();

  obj.min = () => min_storage[size-1];

  return obj;
}

// const stack = StackMin();
//
// stack.push(2);
// stack.push(1);
// stack.push(-25);
// stack.push(3);
// stack.pop();
// stack.push(100);
// stack.pop();
// stack.push(15);
// stack.pop();
// stack.push(7)
// stack.push(203);
// stack.pop();
// stack.push(-100)
// stack.pop();
//
// console.log('min:',stack.min());
// console.log('size:', stack.size());
