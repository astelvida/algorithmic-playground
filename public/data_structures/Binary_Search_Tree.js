function Node(val=null) {
  const node = {};
  node.val = val;
  node.right = null;
  node.left = null;
  return node;
}

function BST() {
  const root = Node();
  function insert(val) {
    if (!root.val) {
      root.val = val;
      return;
    }
    return (function put(node, value, parent) {
      if (node === null) {
        node = Node(value, parent);
      }
      if (value < node.val) {
        node.left = put(node.left, value, node);
      } else if (value > node.val) {
        node.right = put(node.right, value, node);
      }
      return node;
    }(root, val, null));
  }

  function search(val) {
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
  }

  function min(node=root) {
    if (node.left === null) {
      return node.val;
    }
    return min(node.left);
  }

  function max(node=root) {
    if (node.right === null) {
      return node.val;
    }
    return max(node.right);
  }


  function remove(val, node=root) {
    function find(node, parent) {
      if (node === null) {
        return [false, false];
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
    /*
      If 1 child, just replace node to be removed with its child,
      If 2 children...
        1. find the min of the right subtree
        2. replace the value of targeted node with the min
        3. Delete duplicate from right side recusively until we hit case 0;
    */
    switch (childrenCount) {
      case 0:
        parent[side] = null;
        break;
      case 1:
        parent[side] = target.left || target.right;
        break;
      case 2:
        const minRight = Math.min.apply(null, inOrder(target.right));
        target.val = minRight;
        remove(minRight, target.right);
        break;
      default:
        return false;
    }
    return false;
  }

  // (a) In order (Left, Root, Right)
  function inOrder(node=root) {
    const array = [];
    function inOrder(node, depth) {
      if (node !== null) {

        console.log(`node0:%c ${node.val}`, 'color: blue', `depth: ${depth}`);
        inOrder(node.left, depth + 1);
        array.push(node.val);

        inOrder(node.right, depth + 1);
        console.log(`node2:%c ${node.val}`, 'color: green', `depth: ${depth}`);

      }
      return array;
    }
    inOrder(node, 0);
    return array;
  }

  // (b) Preorder (Root, Left, Right)
  function preOrder(node=root) {
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
  }

  function postOrder(node=root) {
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
  }

  return {
    insert,
    search,
    remove,
    preOrder,
    postOrder,
    inOrder,
    root,
    min,
    max,
  };
}


// const bst1 = BST();
// const bst2 = BST();
//
// const p1 = [10, 12, 11, 23, 2, 5, 7];
// const p2 = [11, 13, 23, 2, 5, 7, 37, 29, 31, 17, 19, 3];
//
// p1.forEach((el) => bst1.insert(el));
// p2.forEach((el) => bst2.insert(el));
//
// const root1 = JSON.stringify(bst1.root, null, '\t');
// const root2 = JSON.stringify(bst2.root, null, '\t');
//
// console.log(`successor1: ${bst1.successor(13)}`);
