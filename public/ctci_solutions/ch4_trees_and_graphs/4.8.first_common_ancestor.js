function FCA(tree, n1, n2) {
  let d1 = null;
  let d2 = null;

  // finde depths;
  function dfs(node, depth, parent) {
    console.log('node', node.val, 'depth', depth, 'parent', parent? parent.val : null)

    if (node === null) {
      return;
    }
    node.visited = true;
    // found both depths and we can safely return;
    if (d1 && d2) {
      return true;
    } else if (node.val === n1.val) {
      d1 = depth;
    } else if (node.val === n2.val) {
      d2 = depth;
    }

    if (node.left && !node.left.visited) {
      dfs(node.left, depth + 1, node);
    }
    if (node.right && !node.right.visited) {
      dfs(node.right, depth + 1, node);
    }
  }
  dfs(tree, 0, null);
  console.log('d1:', d1, 'd2:', d2 )
  let max;
  let min;
  let node1;
  let node2;
  if (d1 > d2) {
    max = d1;
    min = d2;
    node1 = n1;
    node2 = n2;
  } else {
    max = d2;
    min = d1;
    node1 = n2;
    node2 = n1;
  }


  // get them both to save level
  while (max !== min) {
    node1 = node1.parent;
    max--;
  }
  if (node1.val === node2.val) return node1;
  // find their parent at the intersection
  while (node1 !== node2 ) {
    node1 = node1.parent;
    node2 = node2.parent;
  }

  return node1.val;
  // if (d1 !== d2)
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
const n2 = tree.left; // b
  // console.log('nodes:', JSON.stringify(tree, null, '\t'));

  console.log('should return "a"', FCA(tree, n1, n2));
