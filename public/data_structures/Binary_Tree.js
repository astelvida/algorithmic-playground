const BinaryTree = function () {
  const root = Node();
  let branch = 'left';

  function Node(val=null) {
    const node = {};
    node.val = val;
    node.right = null;
    node.left = null;
    node.parent = null
    return node;
  }

  function insert(val) {
    if (!root.val) {
      root.val = val;
      return;
    }
    function findEmptyNode(node) {
      if (node === null) {
        return Node(val);
      }
      node[branch] = findEmptyNode(node[branch]);
      return node;
    }
    findEmptyNode(root);
    branch = toggle(branch);
  }

  function toggle(branch) {
    return branch === 'left'? 'right': 'left';
  }

  return {
    insert,
    root,
  };
};

// module.exports = BinaryTree;
