class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // assign this stack to have storage which will be empty obj
    this.storage = {};
    // assign this stack to have a position set to 0
    this.position = 0;
  }

  // declare function push
  push(value) {
    // increment position
    this.position++;
    // store value at storage at position
    this.storage[this.position] = value;
  }

  // declare function pop
  pop() {
    // if position is greater than 0
    if (this.position > 0) {
      // make var temphold to be assigned to storage at position
      var tempHold = this.storage[this.position];
      // delete storage at position
      delete this.storage[this.position];
      // decrement postion
      this.position--;
      // return temphold
      return tempHold;
    }
  }


  // declare  size
  size() {
  // return position
    return this.position;
  }
}
