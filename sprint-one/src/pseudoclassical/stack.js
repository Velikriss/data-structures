var Stack = function() {
  this.length = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function() {
  return this.length;
};
Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};
Stack.prototype.pop = function() {
  var popped = this.storage[this.length - 1];
  if (this.length > 0) {
    this.length --;
  }
  return popped;
};


