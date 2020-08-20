var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // assign this to have a storage obj
  this.storage = {};
  // assign this to have a postion tracker
  this.position = 0;
};


// assign stack.prototype to have the method push
Stack.prototype.push = function(value) {
  //   increment position
  this.position++;
  //   asssign position to take in value
  this.storage[this.position] = value;
};


// assign stack.prototype to have the method pop
Stack.prototype.pop = function() {
  //   check if position is greater than 0
  if (this.position > 0) {
    //   create temp var to hold return data
    var tempHold = this.storage[this.position];
    //   delete this storage at position
    delete this.storage[this.position];
    //decrement position
    this.position--;
    // return temp var
    return tempHold;
  }
};


// assign stack.prototype to have the method size
Stack.prototype.size = function() {
  //   return position
  return this.position;
};
