function bstSequences(node) {
  const result = [];

  if (node === null) {
    result.push(new List());
    return result;
  }

  const prefix = new List();
  prefix.add(node.val);

  const leftSeq = bstSequences(node.left);
  const rightSeq = bstSequences(node.right);
  console.log('node', node.val, 'prefix', prefix.head.val);
  console.log('left:', leftSeq, 'right:', rightSeq)

  return result;
}

const bst = BST();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(3);
bst.insert(4);
bst.insert(1);

console.log(bstSequences(bst.root));
