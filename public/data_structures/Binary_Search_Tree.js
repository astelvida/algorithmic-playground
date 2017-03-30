const BST = function (val) {
  const root = Node(val);
  const bst = {};

  function Node(val) {
    const node = {};
    node.val = val;
    node.right = null;
    node.left = null;
    return node;
  }

  bst.insert = function (val) {
    return (function put(node, value) {
      if (node === null) {
        return new Node(value);
      }
      if (value <= node.val) {
        node.left = put(node.left, value);
      } else if (value > node.val) {
        node.right = put(node.right, value);
      }
      return node;
    }(root, val));
  };

  bst.delete = function (val) {
    
  };

  bst.search = function (val) {
    function find(node) {
      if (node === null) {
        return false;
      }
      if (node.val === val) {
        return node;
      }
      return val <= node.val? find(node.left): find(node.right);
    }
    return find(root);
  };


  // (a) In order (Left, Root, Right)
  bst.inOrder = function () {
    const array = [];
    function inOrder(node) {
      if (node !== null) {
        inOrder(node.left);
        array.push(node.val);
        inOrder(node.right);
        return array;
      }
      return undefined;
    }
    return inOrder(root, array);
  };

  // (b) Preorder (Root, Left, Right)
  bst.preOrder = function () {
    const array = [];
    function preOrder(node) {
      if (node !== null) {
        array.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
        return array;
      }
      return undefined;
    }
    return preOrder(root);
  };
  // (c) Postorder (Left, Right, Root)
  bst.postOrder = function () {
    const array = [];
    function postOrder(node) {
      if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        array.push(node.val);
        return array;
      }
      return undefined;
    }
    return postOrder(root);
  };

  return bst;
};

const bst = BST(7);
bst.insert(4);
bst.insert(12);
bst.insert(2);
bst.insert(6);
bst.insert(9);
bst.insert(19);
bst.insert(3);
bst.insert(5);
bst.insert(8);
bst.insert(11);
bst.insert(15);
bst.insert(20);

console.log('Pre order', bst.inOrder());
console.log('In order', bst.preOrder());
console.log('Post order', bst.postOrder());
