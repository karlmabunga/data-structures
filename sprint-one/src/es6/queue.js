class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // this storage will be an empty obj
    this.storage = {};
    // this position will be 0
    this.position = 0;
    // this deposition will be 0
    this.deposition = 0;
  }

  // create method for enqueue
  enqueue(value) {
    // increment the position
    this.position++;
    // storage at position is value
    this.storage[this.position] = value;
  }


  // create method for dequeue
  dequeue() {
    // check is size is greater than zero
    if (this.size() > 0) {
      // incrememnt depostion
      this.deposition++;
      // create temp var to hold storage at deposition
      var tempHold = this.storage[this.deposition];
      // delete storage at deposition
      delete this.storage[this.deposition];
      // return tempHold
      return tempHold;
    }
  }


  // create method for size
  size() {
    // return position minus deposition
    return this.position - this.deposition;
  }
}
