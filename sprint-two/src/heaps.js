class MaxBinaryHeap {
  constructor(arr) {
    this.values = arr;
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= element) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    // Edge case for only one element in the heap
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;

  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (swap === null && rightChild > element || swap !== null && rightChild > leftChild) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[idx] = this.values[swap];
      idx = swap;
    }
  }
}


let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap);