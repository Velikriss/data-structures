

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = {k: v, next: null};
  if (!this._storage.get(index)) {
    this._storage.set(index, pair);
  } else {
    var head = this._storage.get(index);
    var traversal = head;
    while (traversal.next !== null) {
      traversal = traversal.next;
    }
    traversal.next = pair;
    this._storage.set(index, head);
    this._storage.set(index, traversal);
    
    if (v === 'val2') {
      debugger;
    }
    console.log(this._storage.get(index));
  }

  
};

HashTable.prototype.retrieve = function(k) {
 //  var index = getIndexBelowMaxForKey(k, this._limit);
 //  var retrieved = this._storage.get(index);
 //  if (retrieved === undefined) {
 //    return undefined;
 //  }
 //  var key = retrieved.slice(0, retrieved.indexOf('^@'));
 // // console.log(key);
 //  if (key === k) {
 //    var value = retrieved.slice(retrieved.indexOf('^@') + 2, retrieved.length);
 //    return value;
 //  } else {
 //    return 0;
 //  }
 //return 0;
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


