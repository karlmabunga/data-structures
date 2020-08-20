var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create obj with Object.create(stackMethods)
  var someInstance = Object.create(stackMethods);
  // assign the obj.storage and empty obj
  someInstance.storage = {};
  // create positional var
  var position = 0;
  // assign the obj[positon] to positonal var;
  someInstance.position = position;
  // return obj
  return someInstance;
};

var stackMethods = {};
// create stack Methods push
stackMethods.push = function(value) {
  //   increment this position
  this.position++;
  //  assign the value to the position of storage
  this.storage[this.position] = value;
};


// create stack pop method
stackMethods.pop = function() {
  if (this.position > 0) {
    //   create temp hold for storage at position
    var tempHold = this.storage[this.position];
    //   delete the storage at positon
    delete this.storage[this.position];
    //   decrement the postion
    this.position--;
    //   return the temp hold
    return tempHold;
  }
};

// create stack size method
stackMethods.size = function() {
  //   return the position
  return this.position;
};

