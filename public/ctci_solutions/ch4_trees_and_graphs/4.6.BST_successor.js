function successor(node) {
  if (!node) return null;

  if (node.right !== null) {
    let down = node.right;
    while (down.left !== null) {
      down = down.left;
    }
    return down;
  }

  let up = node.parent;
  let n = node;
  while (up !== null && up.left !== n) {
    n = up;
    up = up.parent;
  }
  return up;
}

const bst1 = BST();
const bst2 = BST();

const p1 = [10, 18, 12, 11, 23, 2, 7, 25, 9];
const p2 = [11, 13, 23, 2, 5, 7, 37, 29, 31, 17, 19, 3];

p1.forEach((el) => bst1.insert(el));
p2.forEach((el) => bst2.insert(el));

// const root1 = JSON.stringify(bst1.root, null, '\t');
// const root2 = JSON.stringify(bst2.root, null, '\t');
const root12 = bst1.root.right.right;
console.log(successor(root12))
// console.log('successor1', successor(bst1.root.left.right));
