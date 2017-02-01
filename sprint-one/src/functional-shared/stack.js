var Stack = function() {
  var newStack = {length: 0, storage: {} };
  _.extend(newStack, stackMethods);

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {
  size: function () {
    return this.length;
  },
  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function () {
    var popped = this.storage[this.length - 1];
    if (this.length > 0) {
      this.length --;
    }
    return popped;
  }

};


