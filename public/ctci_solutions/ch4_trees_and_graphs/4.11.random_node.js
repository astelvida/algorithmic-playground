class Node {
  constructor(val = null) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.size = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let branch = 'root';
    let node = this;
    while (node[branch]) {
      node = node[branch];
      node.size++;
      branch = val < node.val? 'left': 'right';
    }
    node[branch] = new Node(val);
  }
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(9);
tree.insert(1);
tree.insert(20);
tree.insert(18);



console.log('TREE',tree.root)
