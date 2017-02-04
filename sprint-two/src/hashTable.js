

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
  console.log('After an increment: ' + this._storage.getSize(index));
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
    //debugger;
    while (current !== null) {
      if (current[k] !== undefined) {
        prev.next = current.next;
        this._storage.incrementSize(index, -1);
        console.log('After a decrement: ' + this._storage.getSize(index));
      }
      prev = current;
      current = current.next;
    }
    return undefined;  
  } else {
    if (prev[k] !== undefined) {
      this._storage.set(index, undefined);
      this._storage.incrementSize(index, -1);
      console.log('After a decrement: ' + this._storage.getSize(index));

    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  typically is close to constant time, but as each bucket grows it could be worst case linear. 
 */


