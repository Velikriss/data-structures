var Queue = function() {
  this.length = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Queue.prototype.size = function () {
  return this.length;
};
Queue.prototype.enqueue = function (val) {
  this.storage[this.length] = val;
  this.length++;
};
Queue.prototype.dequeue = function () {
  var dequeued = this.storage[0];
  // we start at the second element in the array since the first will be removed
  for (var i = 1; i < this.size(); i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.length];
  if (this.length > 0) {
    this.length --;
  }
  return dequeued;
};


