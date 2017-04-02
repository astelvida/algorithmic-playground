function checkSubtree(t1, t2) {
  // find depth of smaller subtree
  function depth(node, d) {
    if (node === null) {
      return -1;
    }
    return d += Math.max(depth(node.right, d), depth(node.left, d)) + 1;
  }

  const queue = [t1];
  const visited = { [t1.val]: true };

  while (queue.length !== 0) {
    let curr = queue.shift();
    console.log('curr node',curr? curr.val: null);

    if (curr.val === t2.val) {
      return true;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);

  }
  return false;

}

function checkSubtree2(t1, t2) {
  // let str2 = preOrderToString(t2, "");
  function preOrderToString(node, arr) {
    if (node === null) {
      arr.push('X');
      return;
    }
    arr.push(node.val);
    preOrderToString(node.left, arr);
    preOrderToString(node.right, arr);
    return arr;
  }

  const str1 = preOrderToString(t1, []).join('');
  const str2 = preOrderToString(t2, []).join('');

  return str1.indexOf(str2) !== -1;

}


const bst1 = BST();
bst1.insert(7);
bst1.insert(5);
bst1.insert(2);
bst1.insert(8);
bst1.insert(3);
bst1.insert(6);


const bst2 = BST();
bst2.insert(9);
bst2.insert(4);
bst2.insert(1);
bst2.insert(16);
bst2.insert(30);
bst2.insert(12);

bst1.root.right.right = bst2.root;

const bst3 = BST();
bst3.insert(100);
bst3.insert(16);
bst3.insert(30);
bst3.insert(12);

// bst1.root.right.right.right.right.lef = bst3.root;

console.log('nodes:', JSON.stringify(bst3.root, null, '\t'));
// console.log('nodes:', JSON.stringify(bst2.root, null, '\t'));

console.log(checkSubtree2(bst1.root, bst2.root));
