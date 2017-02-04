  var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  BinarySearchTree.prototype.insert = function (value) {
    if (typeof value === 'number') {
      var insertNode = new BinarySearchTree(value);
      var currentNode = this;
      var travel = this.traverse(currentNode, value);
      while (currentNode[travel] !== null) {
        currentNode = currentNode[travel];
        travel = this.traverse(currentNode, value);
      }
      currentNode[travel] = insertNode;  
    }
  };
  BinarySearchTree.prototype.contains = function(value) {
    var currentNode = this;
    if (currentNode.value === value) {
      return true;
    }
    var travel = this.traverse(currentNode, value);
    while (currentNode[travel] !== null) {
      if (currentNode[travel].value === value) {
        return true;
      }
      currentNode = currentNode[travel];
      travel = this.traverse(currentNode, value);
    }
    return false;

  };
  BinarySearchTree.prototype.depthFirstLog = function(callback) {
    callback(this.value);

    if (this.left !== null) {
      this.depthFirstLog.call(this.left, callback);
    }

    if (this.right !== null) {
      this.depthFirstLog.call(this.right, callback); 
    }


  };

  BinarySearchTree.prototype.traverse = function(node, value) {
    return node.value < value ? 'right' : 'left';
  }; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
