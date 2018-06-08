Add your answers to the questions below.

1.  What is the runtime complexity of your `depthFirstForEach` method?

Θ(n), this is because we are traversing the entire tree. As new nodes get added to the tree, the number of additional times we need to call 'depthFirstForEach' increases linearly.

2.  What is the space complexity of your `depthFirstForEach` function?

Θ(n), regardless of whether we implemented our solution iteratively or recursively.

3.  What is the runtime complexity of your `breadthFirstForEach` method?

Θ(n), by the same logic as 'depthFirstForEach'.

4.  What is the space complexity of your `breadthFirstForEach` method?

Θ(n), because every node gets added to a queue data structure. In the worst-case scenario, we might have a bunch of nodes in the queue.

5.  What is the runtime complexity of your `heapsort` function?

Θ(n * log(n)), because we have two loops, each invoking Θ(log(n)) functions. 

6.  What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

Θ(n)