var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create numeric key for storing value
  var position = 0;
  var deposition = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // assign the key to a value
    storage[position] = value;
    position++;
  };

  someInstance.dequeue = function () {
    if (someInstance.size() !== 0) {
      // take our the first thing in enqueue
      var tempHold = storage[deposition];
      delete storage[deposition];
      deposition++;
      return tempHold;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
