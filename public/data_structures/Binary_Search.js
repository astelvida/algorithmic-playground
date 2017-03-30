const BT = function (value) {
  const root = Node(value);
  const bt = {};

  function Node(val) {
    const node = {};
    node.val = val;
    node.right = null;
    node.left = null;
    return node;
  }

  bt.insert = function (val) {
    const put = function (node) {
      if (node.left === null) {
        return new Node(val);
      }

      if (node.right === null) {
        return new Node(val);
      }

      return  
    };
    return put(root);
  };

  bt.delete = function (val) {

  };

  bt.search = function (val) {
    function find(node) {
      if (node === null) {
        return false;
      }
      if (node.val === val) {
        return node;
      }
      find(node.left)
      find(node.right);
    }
    return find(root);
  };


    // (a) Inorder (Left, Root, Right) : 4 2 5 1 3
    bt.inOrder = function (val) {

    };
    // (b) Preorder (Root, Left, Right) : 1 2 4 5 3
    bt.preOrder = function (val) {

    };
    // (c) Postorder (Left, Right, Root) : 4 5 2 3 1
    bt.postOrder = function (val) {

    };

  return bt;
};


const bt = BT(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);

console.log(bt.search(4));
