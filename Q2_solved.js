function furthestRoom(input) {
  //STEP I: ADJACENCY LIST
  //first let's represent our "floor plan" as an adjacency list. We assign each room an array containing all the rooms it leads to.
  //This assumes that input doesn't contain duplicate pairs.
  let adjacencyList = {};
  function addRooms(arr, from, to) {
    arr[from] ? arr[from].push(to) : (arr[from] = [to]);
    arr[to] ? arr[to].push(from) : (arr[to] = [from]);
  }
  input.forEach((item) => addRooms(adjacencyList, ...item));

  //STEP II: BREADTH-FIRST SEARCH.
  //Now we will conduct a breadth-first search to identify the shortest possible paths from room 0 ("source") to all the rooms.

  let queue = []; //We will use this to keep track of which room to examine next.
  let shortestPaths = {}; //We will store our list of rooms and the length of the shortest path that leads to each here.
  let currentRoom = {}; //This will hold the first room in our queue- the room we are "operating on" in each step.

  //STEP II-0 Let's start off by entering room 0 into our queue.
  let source = { to: 0, from: 0, pathLength: 0 };
  queue.push(source);

  while (queue.length !== 0) {
    //STEP II-1 We add our current room to the shortest paths list:
    //(NB: We only record room number and its shortest path, as that's what's required to solve the problem and since recording more information would complicate Step III
    // If we wanted to recreate the path leading to each room, we'd also record the room leading to the current room.)
    currentRoom = queue[0];
    shortestPaths[currentRoom.to] = currentRoom.pathLength;

    //STEP II-2 We add the rooms adjacent to our current room to the queue, provided we haven't found their shortest path yet:
    //(NB: Here we also record the room number leading to the given room. This doesn't complicate Step III and is useful for console.logging purposes)
    adjacencyList[currentRoom.to].forEach((room) => {
      if (!shortestPaths[room] && shortestPaths[room] !== 0) {
        queue.push({
          to: room,
          from: currentRoom.from,
          pathLength: currentRoom.pathLength + 1,
        });
      }
    });

    //STEP II-3 We remove our current room from the queue:
    queue.shift();

    //We repeat steps II-1 to II-3 for as long as we have rooms in our queue.
  }

  //STEP III: Pick the path to the farthest room.
  //Now that we have a list of shortest paths to all the rooms, we pick the longest of them: that's the shortest path to the farthest room.
  const shortestPathsValues = Object.values(shortestPaths);
  const solution = Math.max(...shortestPathsValues);

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
