

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = {};
  pair[k] = v;
  pair['next'] = null;
  if (!this._storage.get(index)) {
    this._storage.set(index, pair);
    this._storage.incrementSize(index, 1);
  } else {
    var traversal = this._storage.get(index);
    if (traversal[k] !== undefined) {
      this._storage.set(index, pair);
    } else {
      while (traversal.next !== null) {
        if (traversal.next[k] !== undefined) {
          traversal.next = pair;
          return;
        }
        traversal = traversal.next;
      }
      traversal.next = pair;
      this._storage.incrementSize(index, 1); 
    }
  }
  if (this._storage.getSize(index) > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k, cmd) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var traversal = this._storage.get(index);
  if (traversal === undefined) {
    return undefined;
  }
  while (traversal !== null) {
    if (traversal[k] !== undefined) {
      return traversal[k];
    }
    traversal = traversal.next;
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var prev = this._storage.get(index);
  var current = prev.next;
  if (this._storage.getSize(index) > 1) {
    if (prev[k] !== undefined) {
      this._storage.set(index, current);
      this._storage.incrementSize(index, -1);
      return;
    }
    while (current !== null) {
      if (current[k] !== undefined) {
        prev.next = current.next;
        this._storage.incrementSize(index, -1);
      }
      prev = current;
      current = current.next;
    }
    return undefined;  
  } else {
    if (prev[k] !== undefined) {
      this._storage.set(index, undefined);
      this._storage.incrementSize(index, -1);

    }
  }
  if (this._storage.getSize(index) < this._limit * 0.25) {
    this.resize(this._limit * 0.5);
  }
};

//Dave hash resize

HashTable.prototype.resize = function(newSize) {
  var old = this._storage;
  var oldSize = this._limit;
  this._limit = newSize;
  this._storage = LimitedArray(this._limit);
  this._storage.resetSize();
  for (var i = 0; i < oldSize; i++) { //<<--- iterating through buckets
    var node = old.get(i);
    if (node === undefined) {

    } else {
      while (node !== null) {
        for (var key in node) {
          if (key !== 'next') {
            this.insert(key, node[key]);
          }
        }
        node = node.next;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  typically is close to constant time, but as each bucket grows it could be worst case linear. 
 */


