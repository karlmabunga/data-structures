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
}


let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
console.log(heap);