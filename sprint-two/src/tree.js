var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {

  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};


treeMethods.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};

// ADDED

treeMethods.DFSpreorder = function() {
  var data = [];

  let traverse = function(node) {
    data.push(node.value);
    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  };
  traverse(this);
  return data;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */