Three questions appear below - Q1 and Q2 need you to write code, for Q3 we're just looking for an idea of how you would design and implement the solution. We've included function stubs for your solutions in a variety of languages in Q1&Q2, but feel free to use any language you like if your preferred one isn't included.

# Q1: Matched pairs

You have a list of numbers. Write a function which takes the list (either as a list or array, depending on your choice of language) as an input, and returns a count of how many numbers can not be paired up with another identical number in the list. Each element in the list can only be a member of a single pair - if we have three elements the same, two of those can pair with each other, leaving the third unpaired.

e.g.
[1,2,3,4] returns 4 (1,2,3,4 can’t be paired)
[1,1,2,2,3,3,4,4] returns 0 (all numbers can be paired)
[1,2,2,3,3,3,4,4,4,4] returns 2 (the 1 and one of the 3s can’t be paired)
[4,3,2,1,3,2,1,2,1,1] returns 2 (the 4 and one of the 2s can’t be paired)

## Example test case

### C++:

```
int countUnpaired(std::vector<int> input) {
return 0;
}

std::vector<int> input;
input.push_back(1);
input.push_back(2);
input.push_back(3);
input.push_back(4);
std::cout << countUnpaired(input) << std::endl;
```

### C:

```
int countUnpaired(int \* input, int inputLength) {
return 0;
}

input[] = {1,2,3,4}
printf("%d\n", input, 4))
```

### Javascript:

```
function countUnpaired(input) {
return 0;
}

console.log(countUnpaired([1,2,3,4]));
```

### Python:

```
def countUnpaired(input):
return 0

print(countUnpaired([1,2,3,4]))
```

# Q2: Navigating through a building

An access control system defines a building using rooms and doors, where a door goes from one room to another. Write a function which calculates the minimum number of doors we need to pass through to get from room 0 to the furthest room? Room numbers may not be sequential, and the highest numbered room may not be the one which is furthest from the start point.

The input to your function will, depending on your choice of language, be an array or list, each element of which is either an array or tuple of size two, where the two elements represent the rooms which the door joins. For example, [3,4] means there is a door between room 3 and room 4 i.e. it’s possible to pass from room 3 to room 4, or from room 4 to room 3.

e.g.
doors = [[0,1], [1,2], [1,3], [2,4], [4,5], [3,4]]
The rooms are defined implicitly if they appear in the doors list; in the example above the rooms are 0,1,2,3,4,5
In this case the shortest path to
room 1 = 1 (0->1)
room 2 = 2 (0->1->2)
room 3 = 2 (0->1->3)
room 4 = 3 (0->1->2->4)
room 5 = 4 (0->1->3->4->5)
So the function should return 4

## Example test case

### C++:

```
int furthestRoom(std::vector<std::pair<int, int> > input) {
return 0;
}

std::vector<std::pair<int, int> > input;
input.push_back(std::pair<int, int>(0,1));
input.push_back(std::pair<int, int>(1,2));
input.push_back(std::pair<int, int>(1,3));
input.push_back(std::pair<int, int>(2,4));
input.push_back(std::pair<int, int>(4,5));
input.push_back(std::pair<int, int>(3,4));
std::cout << furthestRoom(input) << std::endl;
```

### C:

```
int furthestRoom(int input[][2], int inputLength) {
return 0;
}

int input[][2] = {
{0,1}, {1,2}, {1,3}, {2,4}, {4,5}, {3,4}
};
printf("%d\n", furthestRoom(input, 6));
```

### Javascript:

```
function furthestRoom(input) {
return 0;
}

console.log(furthestRoom([[0,1], [1,2], [1,3], [2,4], [4,5], [3,4]]));
```

### Python:

```
def furthestRoom(input):
return 0

print(furthestRoom([(0,1),(1,2),(1,3),(2,4),(4,5),(3,4)]))
```

# Q3: Lists of IDs

A low powered microcontroller with restricted processing and only a few megabytes of storage is used to implement a electronic door lock. When a user swipes their access card we receive a 16 byte card ID in the form of a UUID, and we will allow the user to enter if their ID is on a list of known card IDs. This list of card IDs is generated in the cloud, but the lock must be able to operate even in cases where connectivity to the cloud is temporarily unavailable. It is not neccessary to retrieve any further data, we just want to check if the ID is on the list.

How would you suggest we store these on the microcontroller so that we can quickly check if the user is permitted? The list of valid access cards is calculated in the cloud, and changes infrequently compared to the frequency of checks. Explain briefly the pros and cons of various approaches, and suggest what you would consider the best option. It is not necessary to write any code, but if that is the best way to express your idea, go ahead!
