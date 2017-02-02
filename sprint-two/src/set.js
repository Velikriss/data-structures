var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

/*** time complexity of function: constant ***/
setPrototype.add = function(item) {
  
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

/*** time complexity of function: constant ***/
setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

/*** time complexity of function: constant ***/
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
