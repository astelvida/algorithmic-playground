/*
  Write a function to sort a stack such that the smallest items are on the top.
  Cannot use any other data structures except for a temporary stack;
*/

function sortStack(stack) {
  // set initial min & max;
  const s2 = Stack();
  let min = stack.pop();
  let max = stack.pop();
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  while (!stack.isEmpty()) {
    // curr element
    const curr = stack.pop();
    // push prev max to the top
    if (curr > max) {
      s2.push(max);
      max = curr;

    } else if (curr < min) {
      const len = s2.size();
      let k = len;

      // temporarily move elements to orig stack
      while (k !== 0) {
        const temp = s2.pop();
        stack.push(temp);
        k--;
      }
      // push min to the bottom
      s2.push(min);

      // put elements back
      let q = len;
      while (q !== 0) {
        s2.push(stack.pop());
        q--;
      }
      min = curr;

    // if element is larger than curr peak of s2 but smaller than max
    } else if (curr < s2.peek()) {
      const len = s2.size();
      let k = len;

      while (k !== 0) {
        const temp = s2.pop();
        if (curr >= temp) {
          s2.push(temp);
          s2.push(curr);
          break;
        }
        stack.push(temp);
        k--;
      }
      if (k === 0) {
        s2.push(curr);
      }
      let q = len - k;
      while (q !== 0) {
        s2.push(stack.pop());
        q--;
      }

    } else {
      s2.push(curr);
    }
  }
  stack.push(max);
  while (!s2.isEmpty()) {
    stack.push(s2.pop());
  }
  stack.push(min);
}


// const myStack = Stack();
// myStack.push(2);
// myStack.push(15);
// myStack.push(23);
// myStack.push(1);
// myStack.push(10);
// myStack.push(7);
// myStack.push(6);
// myStack.push(9);
// myStack.push(3);


// const myStack = Stack();
// myStack.push(15);
// myStack.push(7);
// myStack.push(23);
// myStack.push(10);
// myStack.push(2);
// myStack.push(3);
// myStack.push(6);
// myStack.push(9);
// myStack.push(1);

// console.log('Result', sortStack(myStack));
