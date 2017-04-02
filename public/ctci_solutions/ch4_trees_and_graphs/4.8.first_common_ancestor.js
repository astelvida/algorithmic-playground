function FCA(tree, n1, n2) {
  // finde depths;
  function depth(node, d) {
    if (node === null) {
      return d - 1;
    }
    return depth(node.parent, d + 1);
  }
  const delta = depth(n1, null) - depth(n2, null);
  let first = delta > 0? n1: n2;
  let second = delta < 0? n1: n2;

  let diff = Math.abs(delta);

  // level out
  while (diff !== 0) {
    first = first.parent;
    diff--;
  }

  // loop till we find the intersection
  while (first !== second) {
    first = first.parent;
    second = second.parent;
  }

  return first;
  // return delta;
}


function Node(val=null, parent=null) {
  const node = {};
  node.val = val;
  node.right = null;
  node.left = null;
  node.parent = parent;
  return node;
}


const tree = Node('a');
tree.left = Node('b', tree);
tree.left.left = Node('d', tree.left);
tree.left.right = Node('e', tree.left);
tree.left.left.left = Node('q', tree.left.left);
tree.left.left.right = Node('t', tree.left.left);

tree.right = Node('c', tree);
tree.right.right = Node('f', tree.right);
tree.right.right.right = Node('h', tree.right.right);
tree.right.right.left = Node('g', tree.right.right);

const n1 = tree.left.left.right; // t
const n2 = tree.right; // b
  // console.log('nodes:', JSON.stringify(tree, null, '\t'));

  console.log('should return "a"', FCA(tree, n1, n2));
