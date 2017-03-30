const BST = function (value) {
  const root = Node(value);
  const bst = {};

  function Node(val) {
    const node = {};
    node.val = val;
    node.right = null;
    node.left = null;
    return node;
  }

  bst.insert = function (val) {
    const put = function (node) {
      if (node === null) {
        return new Node(val);
      }
      if (val <= node.val) {
        node.left = put(node.left);
      } else if (val > node.val) {
        node.right = put(node.right);
      }
      return node;
    };
    return put(root);
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

  return bst;
};


const bst = BST(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);

console.log(bst.search(4));
