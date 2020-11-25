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
    //    instantiate a new node that sets this.value to value
    var newNode = new Node(value);

    // Base case - Empty List
    // If *this.head && this.tail === null;
    if (this.head === null) {
      //     set this.list.head = this.node
      this.head = newNode;
      //     set this.list.tail = this.newNode
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment length
    this.length++;
    // return this;
  };

  list.removeHead = function() {
    // if empty, do nothing
    if (!this.head) {
      return undefined;
    }
    // temp = head
    var temp = this.head;
    // return former head
    var formerHead = this.head;
    // head = head.next
    this.head = this.head.next;
    // delete temp
    delete temp;
    // decrement the length
    this.length--;
    return formerHead.value;
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
  return list;
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
