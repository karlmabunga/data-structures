var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create someInstance object to return with Object.create()
  var someInstance = Object.create(queueMethods);
  // assign someInstance empty storage obj
  someInstance.storage = {};
  // assign someInstance position 0
  someInstance.position = 0;
  // assign someInstance deposition 0
  someInstance.deposition = 0;
  // return someInstance obj
  return someInstance;
};

var queueMethods = {};

// create enqueue method for queue
queueMethods.enqueue = function(value) {
  // increase position
  this.position++;
  // store value at method
  this.storage[this.position] = value;
};


// create dequeue method for queue
queueMethods.dequeue = function() {
  if (this.size() > 0) {
    // increment deposition
    this.deposition++;
    // create temp var to hold current dequeue
    var tempHold = this.storage[this.deposition];
    // delete the dequeue
    delete this.storage[this.deposition];
    // return temp
    return tempHold;
  }
};


// create size method for queue
queueMethods.size = function() {
  // return difference of postion from depostion
  return this.position - this.deposition;
};
