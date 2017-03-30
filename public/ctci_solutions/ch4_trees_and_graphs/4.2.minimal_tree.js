/*
  Given a sorted array with unique elements, create a binary
  search tree with minimal height.
*/

const log = console.log;

function minimalTree(arr, start, end) {
  if (end < start) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const node = Node(arr[mid]);
  node.left = minimalTree(arr, start, mid-1);
  node.right = minimalTree(arr, mid+1, end);
  return node;
}

// node helper function
function Node(val) {
  const node = {};
  node.val = val;
  node.right = null;
  node.left = null;
  return node;
}


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
console.log(minimalTree(primes, 0, primes.length - 1));

// 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
