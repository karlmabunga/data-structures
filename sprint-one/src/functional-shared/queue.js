var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create var for position of values
  var position = 0;
  var deposition = 0;
  // create obj to store queue
  var someInstance = {};

  someInstance.position = position;
  someInstance.deposition = deposition;
  // create var for storage
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  // return queue
  return someInstance;
};


var queueMethods = {};

// add enqueue property function to queueMethods
queueMethods.enqueue = function(value) {
  this.position++;
  this.storage[this.position] = value;
};
// add dequeue property function to queueMethods
queueMethods.dequeue = function() {
  // take our the first thing in enqueue
  if (this.size() > 0) {
    this.deposition++;
    var tempHold = this.storage[this.deposition];
    delete this.storage[this.deposition];
    // position++;
    return tempHold;
  }
};
// add size property function to queueMethods
queueMethods.size = function() {
  return this.position - this.deposition;
};

