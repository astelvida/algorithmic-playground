function Queue() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function add(item) {
  this.storage[this.end++] = item;
};

Queue.prototype.dequeue = function remove() {
  if (this.isEmpty()) {
    return false;
  }
  const dequeued = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  return dequeued;
};

Queue.prototype.size = function size() {
  return this.end - this.start;
};

Queue.prototype.isEmpty = function isEmpty() {
  return !this.size();
};

Queue.prototype.peek = function isEmpty() {
  return this.isEmpty()? null: this.storage[this.start];
};


// const newQueue = new Queue();
// newQueue.enqueue(5);
// newQueue.enqueue(6);
// newQueue.enqueue(7);
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.enqueue(1);
// newQueue.dequeue();
// newQueue.enqueue(100);
// newQueue.dequeue();
