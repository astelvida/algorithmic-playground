/*
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */

function listOfDepths(tree) {
  const lists = {};
  const queue = [tree];
  const visited = { [tree.val]: true };
  tree.depth = 0;

  while (queue.length) {
    const node = queue.shift();
    if (!lists[node.depth]) {
      lists[node.depth] = new List();
    }
    lists[node.depth].appendToTail(node.val);

    if (node.left && !visited[node.left.val]) {
      node.left.depth = node.depth + 1;
      queue.push(node.left);
      visited[node.left.val] = true;
    }

    if (node.right && !visited[node.right.val]) {
      node.right.depth = node.depth + 1;
      queue.push(node.right);
      visited[node.right.val] = true;
    }
  }
  return lists;
}


const tree = BST();
tree.insert(19);
tree.insert(3);
tree.insert(15);
tree.insert(5);
tree.insert(40);
tree.insert(22);
tree.insert(11);
tree.insert(20);
tree.insert(100);
listOfDepths(tree.root);
// returns a list of nodes;
