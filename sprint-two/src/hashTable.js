

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
  } else {
    var traversal = this._storage.get(index);
    if (traversal[k] !== undefined) {
      this._storage.set(index, pair);
    } else {
      while (traversal.next !== null) {
        traversal = traversal.next;
      }
      traversal.next = pair;  
    }
  }

  
};

HashTable.prototype.retrieve = function(k) {
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
  this._storage.set(index, undefined);
};

HashTable.prototype.checkKeyValue = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


