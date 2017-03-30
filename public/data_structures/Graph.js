// Implementation #1:
// Store nodes and edges in objects

// Instantiate a new graph
const Graph = function () {
  this.nodes = {};
};

Graph.prototype.V = function (key) {
  return Object.keys(this.nodes[key]);
};

Graph.prototype.E = function (key) {
  return Object.keys(this.nodes[key].edges);
};

Graph.prototype.peek = function () {
  return this.nodes;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = this.nodes[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains
// is represented in the graph.
Graph.prototype.contains = function (node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other
    // connected nodes.
    for (const targetNode in this.nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this.nodes[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  // Add an edge to each node pointing to the other
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  // Remove edges from each node's edge list
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (const node in this.nodes) {
    cb(node);
  }
};




// Implementation #2:
// Use an Adjacency Matrix to describe relationships

const GraphAM = function () {
  this.nodes = [];
};

GraphAM.prototype.addNode = function (node) {
  this.nodes[node] = this.nodes[node] || [];
};

GraphAM.prototype.contains = function (node) {
  return !!this.nodes[node];
};

GraphAM.prototype.removeNode = function (node) {
  if (this.contains(node)) {
    // iterate over array like an object, to skip over undefined values
    for (const i in this.nodes[node]) {
      this.removeEdge(node, i);
    }
    this.nodes[node] = undefined;
  }
};

GraphAM.prototype.hasEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this.nodes[fromNode][toNode];
};

GraphAM.prototype.addEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

GraphAM.prototype.removeEdge = function (fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  this.nodes[fromNode][toNode] = undefined;
  this.nodes[toNode][fromNode] = undefined;
};

GraphAM.prototype.forEachNode = function (cb) {
  for (const node in this.nodes) {
    cb(node);
  }
};

//////////////////////////////////////////////////////////////////
// uncomment this line to use the AM version of Graph
// Graph = GraphAM;

// module.exports = Graph;
