
// BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.


var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var result = [];
  this.depth = 0;
  var queue = [this]

  while(queue.length) {
    var node = queue.shift();
    if(filter(node.value, node.depth)) {
      result.push(node.value)
    }
    for(var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      child.depth = node.depth + 1
      queue.push(child);
    }
  }
  return result;
};
/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

    var root = new Tree(0);

    root.addChild(1);
    root.addChild(2);

    // depth: 2
    root.children[0].addChild(3);
    root.children[0].addChild(4);
    root.children[1].addChild(5);
    root.children[1].addChild(6);

    // depth: 3 (spars    root.children[0].children[0].addChild(3);
    root.children[0].children[0].addChild(4);
    root.children[1].children[0].addChild(5);
    root.children[1].children[0].addChild(6);

    var odd = root.BFSelect(function (value, depth) {
      return value % 2;
    })

    var dep = root.BFSelect(function (value, depth) {
      return depth === 1;
    }) //=> [2, 3]


    console.log(odd)
    console.log(dep)

