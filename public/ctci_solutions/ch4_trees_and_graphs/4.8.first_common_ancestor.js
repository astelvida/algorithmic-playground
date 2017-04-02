// WITH links to parents
function FCA1(tree, n1, n2) {
  // if any node is not in the tree, return null
  if (!n1 || !n2) {
    return null;
  }
  // find depth
  function depth(node, d) {
    return node === null? d - 1: depth(node.parent, d + 1);
  }
  const delta = depth(n1, null) - depth(n2, null);
  let first = delta > 0? n1: n2;
  let second = delta <= 0? n1: n2;
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
}

// WITHOUT links to parents
function FCA2(root, n1, n2) {
  // if any node is not in the tree, return null
  if (!cover(root, n1) || !cover(root, n2)) {
    return null;
  }
  console.log('n1 is:', n1.val, 'n2 is:', n2.val);
  function intersection(root, n1, n2) {

    // base case is when one of the nodes is the root
    if (root === null || root === n1 || root === n2) {
      return root.val;
    }

    // checks if n1 and n2 are on the left side
    const n1IsOnLeft = cover(root.left, n1);
    const n2IsOnLeft = cover(root.left, n2);

    console.log(`for root ${root.val}:
    n1IsOnLeft=${n1IsOnLeft} and n2IsOnLeft=${n2IsOnLeft}`);

    // if nodes are on different sides, return the current root;
    // when one of the boolean flags is false means one of them is root
    if (n1IsOnLeft !== n2IsOnLeft) {
      return root;
    }
    // if they are on the same side, keep looking one level down
    const levelDown = n1IsOnLeft? root.left : root.right;
    return intersection(levelDown, n1, n2);
  }

  function cover(root, target) {
    // console.log('root:', root? root.val: null)
    if (root === null) return false;
    if (target === root) return true;
    return cover(root.left, target) || cover(root.right, target);
  }

  return intersection(root, n1, n2);
}



function Node(val=null, parent=null) {
  const node = {};
  node.val = val;
  node.right = null;
  node.left = null;
  // node.parent = parent;
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

const n1 = tree.left.right; // e
const n2 = tree.left.left.right; // t
  // console.log('nodes:', JSON.stringify(tree, null, '\t'));

  console.log('should return "a"', FCA2(tree, n1, n2));
