/*
 * Check if a binary tree is balanced;
 *
 */

// function isBalanced(tree) {
//   let max = -100;
//   let bool = true;
//   function traverse(node, depth, parent) {
//     // console.log('depth', depth, 'node', node? node.val: null, max);
//     if (!bool) {
//       return bool;
//     }
//
//     if (node === null) {
//       // check if height diff is greater than 1
//       bool = max - depth - 1 > 1? false: true;
//       max = max < depth - 1? depth - 1: max;
//       // bool will be immediatley returned from base case;
//       return bool;
//     }
//
//     traverse(node.left, depth + 1, node.val);
//     traverse(node.right, depth + 1, node.val);
//     return bool;
//   }
//
//   return traverse(tree, 0, null);
// }

function isBalanced2(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  let node = tree.root,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  console.log('node',node? node.val: null)
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}



// const tree = new BinaryTree();
// tree.insert(19);
// tree.insert(3);
// tree.insert(15);
// tree.insert(5);
// tree.insert(40);
// tree.insert(22);
// tree.insert(11);
// tree.insert(20);
// tree.insert(100);

// const tree2 = BST();
// tree2.insert(19);
// tree2.insert(3);
// tree2.insert(15);
// tree2.insert(5);
// tree2.insert(40);
// tree2.insert(22);
// tree2.insert(11);
// tree2.insert(20);
// tree2.insert(100);

// console.log(isBalanced2(tree));
// console.log(isBalanced2(tree2));

// returns a list of nodes;
