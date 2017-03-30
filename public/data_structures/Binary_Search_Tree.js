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

  bst.root = root;

  bst.insert = function (val) {
    return (function put(node, value) {
      if (node === null) {
        node = Node(value);
      }
      if (value < node.val) {
        node.left = put(node.left, value);
      } else if (value > node.val) {
        node.right = put(node.right, value);
      }
      return node;
    }(root, val));
  };

  bst.delete = function (val, node=root) {
    function find(node, parent) {
      if (node === null) {
        return false;
      }
      if (node.val === val) {
        return [node, parent];
      }
      return val < node.val? find(node.left, node): find(node.right, node);
    }
    const [target, parent] = find(node, null);

    if (!target) {
      return false;
    }

    const side = target.val < parent.val? 'left': 'right';
    let childrenCount = 0;
    if (target.left && target.right) {
      childrenCount = 2;
    } else if (target.left || target.right) {
      childrenCount = 1;
    }

    switch (childrenCount) {
      case 0:
        parent[side] = null;
        break;
      case 1:
        parent[side] = target.left || target.right;
        break;
      case 2:
        const minRight = Math.min.apply(null, bst.inOrder(target.right));
        target.val = minRight;
        bst.delete(minRight, target.right);
        break;
      default:
        return false;
    }
    return false;
  };

  bst.search = function (val) {
    function find(node) {
      if (node === null) {
        return false;
      }
      if (node.val === val) {
        return node;
      }
      return val < node.val? find(node.left): find(node.right);
    }
    return find(root);
  };


  // (a) In order (Left, Root, Right)
  bst.inOrder = function (node=root) {
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
    inOrder(node);
    return array;
  };

  // (b) Preorder (Root, Left, Right)
  bst.preOrder = function (node=root) {
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
    preOrder(node);
    return array;
  };

  // (c) Postorder (Left, Right, Root)
  bst.postOrder = function (node=root) {
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
    postOrder(node);
    return array;
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

bst.delete(12);
