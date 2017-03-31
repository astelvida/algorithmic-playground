/*
  Check if a binary tree is a binary serach tree;
*/

/* global Node b:true */
/* global BST b:true */
/* eslint no-undef: "error" */

// NOTE: 6 > null => true;
//       6 < null =>  false;

// Need to make sure that all the nodes to the left/right of the
// current one are less/greater than its value, not just the child
// relationship
function validateBST(tree) {

  function check(node, min, max) {
    if (node === null) {
      return true;
    }
    console.log(`TOP node:${node.val} max:${max} min:${min}`);

    // max/min !== null serves as a marker to what branch we're on
    // so we make sure we make the correct comparison
    if ((max !== null && node.val > max) ||
        (min !== null && node.val < min)) {
      return false;
    }

    if (!check(node.left, min, node.val) ||
        !check(node.right, node.val, max)) {
      return false;
    }
    // return true;
  }

  return check(tree, null, null);

}


function Node(val=null) {
  const node = {};
  node.val = val;
  node.right = null;
  node.left = null;
  return node;
}


const p1 = [7, 3, 11, 13, 2];
const bst2 = BST();
p1.forEach((el) => bst2.insert(el));
// console.log('should return true', validateBST(bst.root));


const nbst = Node(20);
nbst.right = Node(30);
nbst.left = Node(25);
nbst.left.right = Node(10);
// nbst.left.left = Node(2);
// nbst.right.left = Node(13);
console.log(nbst);
console.log('should return false', validateBST(nbst));


// const p2 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
// 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
