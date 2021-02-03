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


    // // if empty, do nothing
    // if (!this.head) {
    //   return undefined;
    // }
    // // temp = head
    // var temp = this.head;
    // // return former head
    // var formerHead = this.head;
    // // head = head.next
    // this.head = this.head.next;
    // // delete temp
    // delete temp;
    // // decrement the length
    // this.length--;
    // return formerHead.value;
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
  // currentNode
    var currentNode = this.head;
    //Search Loop
    while (currentNode) {
    //  if target = nodeValue
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
      // if value is null
      if (currentNode === null) {
        return false;
      //    return false
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
