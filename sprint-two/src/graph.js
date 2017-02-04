

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  
  this.Vertex = function(value) {
    this.value = value;
    this.edges = [];
  };
};

/*** time complexity of function: constant ***/
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(new this.Vertex(node));
};

/*** time complexity of function: linear ***/
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i].value === node) {
      return true;
    }
  }
  return false;
};

/*** time complexity of function: linear ***/
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i].value === node) {
      for (var j = 0; j < this.vertices[i].edges.length; j++) {
        this.removeEdge(node, this.vertices[i].edges[j]);
      }
      this.vertices.splice(i, 1);
    }
  }
  
};

/*** time complexity of function: linear ***/
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // find fromNode and look in edges[]
  // iterate edges[] to find toNode
  // if found, return true else return false

  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i].value === fromNode || this.vertices[i].value === toNode) {
      for (var j = 0; j < this.vertices[i].edges.length; j++) {
        if (this.vertices[i].edges[j] === fromNode || this.vertices[i].edges[j] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

/*** time complexity of function: linear ***/
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate and find the fromNode value
  // push toNode value into fromNode's edges[]
  // call addEdge(toNode, fromNode)

  // we know this is inefficient, but it's way cooler
  /*if (arguments[2] === true) {
    for (var i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === fromNode) {
        this.vertices[i].edges.push(toNode);
      }  
    }
  } else {
    for (var i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].value === fromNode) {
        this.vertices[i].edges.push(toNode);
        this.addEdge(toNode, fromNode, true);
      }
    }  
  }*/
  var count = 0;
  var index = 0;
  if (this.hasEdge(fromNode, toNode)) {
    return;
  }
  
  while (count < 2) {
    if (this.vertices[index].value === fromNode) {
      if (fromNode === toNode) {
        this.vertices[index].edges.push(toNode);
        return;
      }
      this.vertices[index].edges.push(toNode);
      count++;
    } else if (this.vertices[index].value === toNode) {
      this.vertices[index].edges.push(fromNode);
      count++;
    }
    index++;
  }
};

/*** time complexity of function: linear ***/
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var count = 0;
  var index = 0;
  while (count < 2) {
    if (this.vertices[index].value === fromNode) {
      this.vertices[index].edges.splice(this.vertices[index].edges.indexOf(toNode), 1);
      count++;
    } else if (this.vertices[index].value === toNode) {
      this.vertices[index].edges.splice(this.vertices[index].edges.indexOf(fromNode), 1);
      count++;
    }
    index++;
  }
};

/*** time complexity of function: linear ***/
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.vertices, function(vertex) {
    if (vertex !== undefined) {
      cb(vertex.value);
    }

  });
};

Graph.prototype.Vertex = function(value) {
  this.value = value;
  this.edges = [];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


