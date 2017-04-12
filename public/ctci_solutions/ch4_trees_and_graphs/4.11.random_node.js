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

  find() {
    const rand = Math.random();
    const branch = rand < 0.5? 'left': 'right';
    const otherBranch = rand >= 0.5? 'right': 'left';

    function getRandom(node) {
      const size = node[branch]? node[branch].size : 0;
      let index = Math.ceil(Math.random() * size);

      if (index < size) {
        return getRandom(node[branch]);
      } else if (index === size) {
        return node[branch];
      } else {
        return getRandom(node[otherBranch]);
      }
    }

    const result = getRandom(this.root);
    if (result) {
      return result;
    } else {
      return this.find();
    }
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

console.log(tree.find());
