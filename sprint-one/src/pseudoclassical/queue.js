var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // assign this storage to be an empty obj
  this.storage = {};
  // assign this position to be 0
  this.position = 0;
  // assign this depostion to be 0
  this.deposition = 0;

};

//  create queue prototype method enqueue
Queue.prototype.enqueue = function(value) {
  // increment the position
  this.position++;
  // assign this storage at position to be the value
  this.storage[this.position] = value;
};

//  create queue prototype method dequeue
Queue.prototype.dequeue = function() {
  // check if the posititon is greater than 0
  if (this.size() > 0) {
    // increment the depostion
    this.deposition++;
    // create a temp var to hold the value to dequeue
    var tempHold = this.storage[this.deposition];
    // delete the dequeue val
    delete this.storage[this.deposition];
    // return the temp var
    return tempHold;
  }
};


//  create queue prototype method pop
Queue.prototype.size = function() {
  // return the position(end) from the deposition(start)
  return this.position - this. deposition;
};
