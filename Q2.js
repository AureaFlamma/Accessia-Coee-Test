function furthestRoom(input) {
  let adjacencyList = {};

  //This assumes input doesn't contain duplicates:
  function addRooms(from, to) {
    adjacencyList[from]
      ? adjacencyList[from].push(to)
      : (adjacencyList[from] = [to]);
    adjacencyList[to]
      ? adjacencyList[to].push(from)
      : (adjacencyList[to] = [from]);
  }

  input.forEach((item) => addRooms(...item));
  console.log(adjacencyList);
  return 0;
}

console.log(
  furthestRoom([
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [4, 5],
    [3, 4],
  ])
);

/*
PRELIMINARY STUFF:
I. Represent the graph as an adjecency table.
II. Create queue:
    a) From
    b) To
    c) Cost
III. Create Solution Table:
    a) From
    c) To
    c) Cost
    d) Found (boolean)

SOLUTION:
Add source node to the queue. This is the current node.
1. Push current node to Solution Table.  
2. Add nodes adjecent to current node to Queue IF NOT ALREADY IN SOLUTION TABLES. 
    a) To: the node being added
    b) From: previous node
    c) Cost: previous node's cost +1
3. Delete current node from the queue. The next node in the queue is the current node. Repeat the steps 
*/
