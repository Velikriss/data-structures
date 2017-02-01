var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length ++;
  };

  someInstance.dequeue = function() {
    var dequed = storage[0];
    for (var i = 1; i < length; i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[length];
    if (length > 0) {
      length --;
    }

    return dequed;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
