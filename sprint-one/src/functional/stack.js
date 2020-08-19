var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // create var for position
  var position = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // increment position
    position++;
    // store position in storage with value of value
    storage[position] = value;
  };

  someInstance.pop = function() {
    // if size is not zero
    if (position > 0) {
      // create a temporary hold var for return value
      var tempHold = storage[position];
      // delete storage value to fix size
      delete storage[position];
      position--;
      return tempHold;
    }
  };

  someInstance.size = function() {
    // return size of keys in the obj
    return position;
  };

  return someInstance;
};
