describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should search with DFS with preorder correctly', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.DFSpreorder()[0]).to.equal(5);
    expect(binarySearchTree.DFSpreorder()[1]).to.equal(2);
    expect(binarySearchTree.DFSpreorder()[2]).to.equal(3);
    expect(binarySearchTree.DFSpreorder()[3]).to.equal(7);
    expect(binarySearchTree.DFSpreorder()[4]).to.equal(6);
  });

  it('should search with DFS with postorder correctly', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.DFSpostorder()[0]).to.equal(1);
    expect(binarySearchTree.DFSpostorder()[1]).to.equal(3);
    expect(binarySearchTree.DFSpostorder()[2]).to.equal(2);
    expect(binarySearchTree.DFSpostorder()[3]).to.equal(6);
    expect(binarySearchTree.DFSpostorder()[4]).to.equal(7);
    expect(binarySearchTree.DFSpostorder()[5]).to.equal(5);
  });
});
