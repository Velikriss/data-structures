var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.length = 0;
  stack.storage = {};


  return stack;


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  size: function () {
    return this.length;
  },
  push: function (val) {
    this.storage[this.length] = val;
    this.length++;
  },
  pop: function () {
    var popped = this.storage[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }
    return popped;
  }
};


