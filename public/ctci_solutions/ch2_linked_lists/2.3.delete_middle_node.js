/*
  Delete a node in the middle (between head and tail not necessarily
  in the exact middle) given access only to that node (cannot access head)
*/

function deleteNode(target) {
  const node = target;
  if (!node || !node.next) {
    return false;
  }
  const next = node.next;
  node.value = next.value;
  node.next = next.next;
  return true;
}
