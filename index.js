const Graph = require('./public/data_structures/Graph.js');
const BinaryTree = require('./public/data_structures/Binary_Tree.js');
const Linked_List = require('./public/data_structures/Linked_List.js');

const log = console.log;


function dfs(graph) {
  const visited = {};
  const arr = [];
  function traverse(v) {
    if (v === null) {
      return;
    }
    visited[v] = true;
    const edges = graph.E(v);
    arr.push(v);
    for (let i = 0; i < edges.length; i++) {
      if (!(edges[i] in visited)) {
        traverse(edges[i]);
      }
    }
  }
  traverse(0);
  return arr;
}

// const graph = new Graph();
// graph.addNode(0);
// graph.addNode(1);
// graph.addNode(2);
// graph.addNode(3);
// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(3, 4);
// graph.addEdge(2, 3);
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(0, 5);
// graph.addEdge(0, 4);
// 0 1 4 2 3
// console.log(dfs(graph));
// { '0': { edges: { '1': 1, '4': 4 } },
//   '1': { edges: { '0': 0, '2': 2, '3': 3, '4': 4 } },
//   '2': { edges: { '1': 1, '3': 3 } },
//   '3': { edges: { '1': 1, '2': 2, '4': 4 } },
//   '4': { edges: { '0': 0, '1': 1, '3': 3 } } }
