var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create obj to store queue
  var someInstance = {};

  // create var for storage
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  // return queue
  return someInstance;
};

// create var for position of values
var position = 0;
var deposition = 0;

var queueMethods = {};

// add enqueue property function to queueMethods
queueMethods.enqueue = function(value) {
  this.storage[position] = value;
  position++;
};
// add dequeue property function to queueMethods
queueMethods.dequeue = function() {
  // take our the first thing in enqueue
  var tempHold = this.storage[position];
  console.log(this.storage[deposition]);
  delete this.storage[position];
  // position++;
  position--;
  return tempHold;
};
// add size property function to queueMethods
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};



console.log(Queue());