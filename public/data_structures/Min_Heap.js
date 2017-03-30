const MinHeap = function (value) {
  const content = [];
  content.length = 1;

  function bubbleUp(i) {
    const p = Math.floor(i/2);    // parent index
    if (i === 1 || content[i] > content[p]) {
      return;
    }
    // swap parent and child
    const temp = content[i];
    content[i] = content[p];
    content[p] = temp;
    // our child is now at parent index so do it again
    bubbleUp(p);
  }

  function sinkDown(i) {
    const r = 2 * i + 1;  // right child index
    const l = 2 * i;      // left child index

    const c = content[r] < content[l]? r: l;  // min child index

     // if we found a child greater than item we're done!
    if (content[i] < content[c]) {
      return;
    }

    // swap node with the smallest child and continue moving up the tree;
    const temp = content[i];
    content[i] = content[c];
    content[c] = temp;
    sinkDown(c);
  }

  // PUBLIC API
  function remove() {
    const first = content.pop();
    content[1] = first;
    sinkDown(1);
  }

  function insert(val) {
    content[content.length] = val;
    bubbleUp(content.length-1);
  }

  function getMin() {
    return content[1];
  }

  function size() {
    return content.length - 1;
  }

  return {
    insert,
    remove,
    getMin,
    size,
  };
};


const minHeap = MinHeap();
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(8);
minHeap.insert(2);
minHeap.insert(16);
minHeap.insert(8);
minHeap.insert(9);
minHeap.insert(23);
minHeap.insert(5);
minHeap.insert(-4);
minHeap.remove();
