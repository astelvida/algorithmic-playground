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

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
queue.dequeue();
queue.enqueue(8);
queue.enqueue();
