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
  let source = { to: 0, from: 0, pathLength: 0, pathFound: true };
  queue.push(source);
  console.log(
    "Add source node to the queue. Current node is :",
    queue[0].to,
    "queue :",
    queue,
    "paths: ",
    paths
  );
  while (queue.length !== 0) {
    (function findPaths(list) {
      paths[queue[0].to] = {
        from: queue[0].to,
        pathLength: queue[0].pathLength,
        pathFound: true,
      };
      console.log(
        `Step 1: Push current node (${queue[0].to}) to Solution Table. Queue :`,
        queue,
        "paths: ",
        paths
      );
      // queue.push(...adjecencyList[queue[0].to])
      adjacencyList[queue[0].to].forEach((item) => {
        if (!paths[item]) {
          queue.push({
            to: item,
            from: queue[0].from,
            pathLength: queue[0].pathLength + 1,
            pathFound: true,
          });
        }
      });
      console.log(
        `Step 2: Add nodes adjecent to current node (${
          queue[0].to
        }) to Queue IF NOT ALREADY IN SOLUTIONS TABLE. Adjecent nodes: ${
          adjacencyList[queue[0].to]
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

  //   console.log(adjacencyList);
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
