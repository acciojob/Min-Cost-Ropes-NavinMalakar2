function mincost(arr)
{ 
//write your code here
// return the min cost
	const heap = new MinHeap();

  // Step 1: Insert all ropes into the heap
  for (let rope of arr) {
    heap.insert(rope);
  }

  let totalCost = 0;

  // Step 2: While more than one rope is left, connect smallest two
  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();
    const cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
  
}

module.exports=mincost;
