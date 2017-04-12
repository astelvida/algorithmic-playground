class Node {
  constructor(val = null) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new Node();
  }

  insert(val) {
    if (!this.root.val) {
      this.root.val = val;
      return;
    }
    let node = this.root;
    while (node !== null) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          break;
        } else {
          node = node.left;
        }
      } else if (val > node.val) {
        if (node.right === null) {
          node.right = new Node(val);
          break;
        } else {
          node = node.right;
        }
      }
    }
  }
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);


console.log(tree.root)
