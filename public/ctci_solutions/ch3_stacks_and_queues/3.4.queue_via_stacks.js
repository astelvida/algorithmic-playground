/*
  Implement a MyQueue class whcih implements a queue using 2 stacks.
*/

const MyQueue = (function queue2() {
  const back = Stack();
  const front = Stack();

  const enqueue = (item) => {
    return front.isEmpty()? front.push(item) : back.push(item);
  };

  const dequeue = () => {
    const deleted = front.pop();
    if (front.isEmpty()) {
      while (!back.isEmpty()) {
        front.push(back.pop());
      }
    }
    return deleted;
  };

  const size = () => front.size() + back.size();

  const isEmpty = () => front.isEmpty() && back.isEmpty();

  const peek = () => front.peek();

  return Object.freeze({
    enqueue,
    add: enqueue,
    dequeue,
    size,
    isEmpty,
    peek,
  });

}());


// CONSOLE TESTS

// const myQueue = MyQueue;

// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.enqueue(6);
// console.log('=> 4', myQueue.dequeue());
// myQueue.enqueue(7);
// myQueue.enqueue(8);
// console.log('=> 5', myQueue.dequeue());
// console.log('=> 6', myQueue.dequeue());
// console.log('=> 7', myQueue.dequeue());
// myQueue.enqueue(9);
// myQueue.enqueue(10);
//
// console.log('isEmpty', myQueue.isEmpty());
// console.log('size', myQueue.size());
// console.log('peek', myQueue.peek());
//
// console.log('=> 8', myQueue.dequeue());
// console.log('=> 9', myQueue.dequeue());
// console.log('=> 10', myQueue.dequeue());
// console.log('=> false', myQueue.dequeue());
//
// myQueue.enqueue(100);
// console.log('=> 100', myQueue.dequeue());
// myQueue.enqueue(101);
// myQueue.enqueue(102);
