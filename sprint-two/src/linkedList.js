var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // change the list.tail to point at whatever we added
    // change the previous tail's next to also point at whatever we added
    var node;
    if (this.tail === null) {
      node = Node(value);
      this.head = node;
      this.tail = node;
    } else {
      node = Node(value);
      this.tail.next = node;
      this.tail = node;
    } 
  };

  list.removeHead = function() {
    var node = this.head;
    this.head = node.next;
    // change list.head to point at the next node
    // store and return the value of the previous first node
    return node.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
    // while node.next != null
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
