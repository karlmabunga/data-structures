var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create the object to return
  var someInstance = {};
  // create var for storage
  var storage = {};
  // assign storage to someInstance.storage
  someInstance.storage = storage;
  // create var for position of the stack
  var position = 0;
  // assign position to storage.position
  someInstance.position = position;
  // link with underbar the stack methods
  _.extend(someInstance, stackMethods);
  // return the object
  return someInstance;
};

var stackMethods = {};


// create a shared method for push/enqueue
stackMethods.push = function(value) {
  // increment position by 1
  this.position++;
  // store value at position in storage
  this.storage[this.position] = value;
};
// create a shared method for pop/dequeue
stackMethods.pop = function() {
  // check if there is something in the stack
  if (this.position > 0) {
    // create temphold to return before deleting
    var tempHold = this.storage[this.position];
    // delete what is on top
    delete this.storage[this.position];
    // decrement the position
    this.position--;
    // return the tempHold
    return tempHold;
  }
};
// create a shared method for size
stackMethods.size = function() {
  //  return the postion
  return this.position;
};