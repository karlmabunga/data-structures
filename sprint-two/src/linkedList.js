// inputs - values
// outputs - list of values that reference other values
// constraints - miniminal time complexity
// edge case - none?
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    let newNode = new Node(value);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  list.removeHead = function() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return this.head;
  };

  // ADDED THIS
  list.addHead = (val) => {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return newNode;
  };

  // ADDED THIS
  list.get = (index) => {

  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        return false;
      }
    }
  };
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
