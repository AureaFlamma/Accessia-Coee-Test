function furthestRoom(input) {
  let adjacencyList = {};
  //This assumes input doesn't contain duplicates:
  function addRooms(arr, from, to) {
    arr[from] ? arr[from].push(to) : (arr[from] = [to]);
    arr[to] ? arr[to].push(from) : (arr[to] = [from]);
  }
  input.forEach((item) => addRooms(adjacencyList, ...item));
  console.log(adjacencyList);

  let queue = [];
  let paths = {};
  let currentRoom = {};
  let source = { to: 0, from: 0, pathLength: 0 };
  queue.push(source);
  console.log(
    "Add source node to the queue. Current node is :",
    currentRoom.to,
    "queue :",
    queue,
    "paths: ",
    paths
  );
  while (queue.length !== 0) {
    (function findPaths(list) {
      currentRoom = queue[0];
      paths[currentRoom.to] = currentRoom.pathLength;
      console.log(
        `Step 1: Push current node (${currentRoom.to}) to Solution Table. Queue :`,
        queue,
        "paths: ",
        paths
      );
      // queue.push(...adjecencyList[currentRoom.to])
      adjacencyList[currentRoom.to].forEach((item) => {
        if (!paths[item] && paths[item] !== 0) {
          queue.push({
            to: item,
            from: currentRoom.from,
            pathLength: currentRoom.pathLength + 1,
          });
        }
      });
      console.log(
        `Step 2: Add nodes adjecent to current node (${
          currentRoom.to
        }) to Queue IF NOT ALREADY IN SOLUTIONS TABLE. Adjecent nodes: ${
          adjacencyList[currentRoom.to]
        }.  Queue :`,
        queue,
        "paths: ",
        paths
      );
      queue.shift();
      console.log(
        `Step 3: Delete current node from the queue. The next node in the queue is the current node. Queue :`,
        queue,
        "paths: ",
        paths
      );
    })();
  }

  const pathsValues = Object.values(paths);
  const solution = Math.max(...pathsValues);

  //   console.log(adjacencyList);
  return solution;
}

console.log(
  furthestRoom([
    [0, 1],
    [1, 2],
    [1, 6],
    [1, 3],
    [2, 4],
    [4, 5],
    [5, 6],
    [3, 4],
  ])
);

/*
PRELIMINARY STUFF:
I. Represent the graph as an adjecency table. ✅
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
