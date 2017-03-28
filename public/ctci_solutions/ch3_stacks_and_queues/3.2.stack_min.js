/*
  3.2. Implement a min method on Stack data structure
  TODO: Implement this method using another stackMin
*/

function StackMin() {
  const obj = {};
  const storage = {};
  const minStorage = {};
  let min = Number.MAX_SAFE_INTEGER;
  let size = 0;

  obj.push = (item) => {
    storage[size] = item;
    if (item < min) {
      min = item;
    }
    minStorage[size] = min;
    size++;
  };

  obj.pop = () => {
    size && size--;
    const popped = storage[size];
    delete storage[size];
    delete minStorage[size];
    return popped;
  };

  obj.size = () => size;

  obj.isEmpty = () => !obj.size();

  obj.min = () => minStorage[size-1];

  return obj;
}


// const stackMin = StackMin();
//
// stackMin.push(2);
// stackMin.push(1);
// stackMin.push(-25);
// stackMin.push(3);
// stackMin.pop();

// console.log('min:',stackMin.min());
// console.log('size:', stackMin.size());
