var Queue = function() {
  var queue = { storage: {}, length: 0 };
  _.extend(queue, queueMethods);
  return queue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(val) {
    this.storage[this.length] = val;
    this.length++;
  },
  dequeue: function() {
    var dequeued = this.storage[0];
    // we start at the second element in the array since the first will be removed
    for (var i = 1; i < this.size(); i++) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.length];
    if (this.length > 0) {
      this.length--;
    }
    return dequeued;
  }
};


