/*
  Given a list of projects and dependencies, find a build order
  that will alow the projects to be built.
  If there is no valid build order return an error.
  Note: Dependencies are of form (a, b), where b is dependent of a.
*/

const Graph = function (V = 0) {
  this.nodes = {};
  this.edges = {};
  this.V = V;
  this.E = 0;
};

function Node() {
  this.edges = [];
  this.dependencies = 0;
  this.inc = function () {
    this.dependencies++;
  };
  this.sub = function () {
    this.dependencies--;
  };
  this.bool = false;
}

Graph.prototype.addNode = function (node) {
  this.nodes[node] = new Node();
  this.V++;
  return this.nodes[node];
};

Graph.prototype.addEdge = function (fromV, toU) {
  this.nodes[fromV].edges.push(toU);
  this.nodes[toU].dependencies++;
  this.E++;
};

Graph.prototype.adj = function (v) {
  return this.nodes[v];
};

Graph.prototype.dependenciesCount = function (v) {
  return this.nodes[v].dependencies;
};

// # of nodes in the graph
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
    nodes: this.nodes,
    edges: this.edges,
    V: this.V,
    E: this.E
  };
};

function buildOrder(projects, dependencies) {
  const graph = buildGraph(projects, dependencies);
  return orderProjects(graph.nodes);
}
//
function buildGraph(projects, dependencies) {
  const graph = new Graph();
  projects.forEach((project) => graph.addNode(project));
  dependencies.forEach((tuple) => graph.addEdge(tuple[0], tuple[1]));
  return graph;
}


function orderProjects(projects) {
  const order = [];
  const projectList = Object.keys(projects);
  const set = projectList.filter(function (name) {
    return projects[name].dependencies === 0;
  });
  // console.log('nodes:', JSON.stringify(projects, null, '\t'));
  while (set.length !== 0) {
    const curr = set.pop();
    order.push(curr);
    projects[curr].edges.forEach(function (edge) {
      projects[edge].dependencies--;
      if (!projects[edge].dependencies) {
        set.push(edge);
      }
    });
  }
  if (order.length !== projectList.length) {
    return null;
  }

  return order;
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['d', 'c'],
                      ['b', 'd'], ['f', 'a']];

console.log('findOrder', buildOrder(projects, dependencies));
//
// // const graph = new Graph();
// // graph.addNode('e');
// // graph.addEdge('a', 'd');
// // graph.addEdge('f', 'b');
// // graph.addEdge('d', 'c');
// // graph.addEdge('b', 'd');
// // graph.addEdge('f', 'a');
// //
// // console.log('Result',buildOrder(graph));
// //
// // console.log('EDGES', graph.edges);
// // console.log('ADJ', graph.adj('f'));
// // console.log('VERTICES', graph.nodes);
// // console.log('#E', graph.E);
// // console.log('#V', graph.V);
