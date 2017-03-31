/*
  Given a list of projects and dependencies, find a build order
  that will alow the projects to be built.
  If there is no valid build order return an error.
  Note: Dependencies are of form (a, b), where b is dependent of a.
*/

const Graph = function (V = 0) {
  this.vertices = {};
  this.edges = {};
  this.V = V;
  this.E = 0;
};

Graph.prototype.addVertices = function (arr=[]) {
  arr.forEach(function (v) {
    this.vertices[v] = v;
  });
  this.V += arr.length;
};

Graph.prototype.addVertex = function (v) {
  this.vertices[v] = this.vertices[v] || v;
  this.V++;
};

Graph.prototype.addEdge = function (fromV, toV) {
  !this.vertices[fromV]? this.addVertex(fromV): null;
  !this.vertices[toV]? this.addVertex(toV): null;
  this.edges[fromV] = this.edges[fromV] || {};
  if (toV in this.edges[fromV]) {
    console.log(
      new Error(`${toV} is already listed as a dependency of ${fromV}!`)
    );
    return;
  }
  this.edges[fromV][toV] = toV;
  this.E++;
};

Graph.prototype.adj = function (v) {
  return this.edges[v]? Object.keys(this.edges[v]) : null;
};

// # of vertices in the graph
Graph.prototype.V = function () {
  return this.V;
};

// # of edges for a vertex
Graph.prototype.E = function () {
  return this.E;
};

// NOTE: not intended to be public method - useful for tests
Graph.prototype.peek = function () {
  return {
    vertices: this.vertices,
    edges: this.edges,
    V: this.V,
    E: this.E
  };
};

const graph = new Graph();
graph.addVertex('e');
graph.addEdge('a', 'd');
graph.addEdge('f', 'b');
graph.addEdge('d', 'c');
graph.addEdge('b', 'd');
graph.addEdge('f', 'a');

console.log('EDGES', graph.edges);
console.log('ADJ', graph.adj('f'));
console.log('VERTICES', graph.vertices);
console.log('#E', graph.E);
console.log('#V', graph.V);
