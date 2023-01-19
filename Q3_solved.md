Because updating the list of valid keys is done infrequently, I am going to focus on speed of lookup and memory requirements of different ways of storing the list. Here’s a breakdown of the different options:

1. Array, pointers, linked list.

Arrays, pointers and linked lists have a lookup speed of O(1) provided we are looking up by index. Assuming user’s card will not contain the index the ID carries in our list, the lookup will have to be done by iterating through the array. This will take O(n) time, where n is the length of the list. This suboptimal lookup time may be slightly offset by the fact that arrays (but not pointers or linked lists) are cache-friendly, as they store items sequentially, next to each other. However, low-end microcontrollers like ours rarely use cache so we will dismiss this benefit.

2. Ordered array with binary search.

Since UUIDS are essentially (hexadecimal) numbers, we can order them (in the cloud) before storing them as an array locally. This way when the user swipes their card we can conduct binary search in O(log n) time and still take advantage of the cache.

3. Set

We can still store our list of valid ID’s in an array. However, when the list of valid IDs is fetched from the cloud, we can run each ID through a hash function which will assign it an index. Then, we enter Boolean true at the index that corresponds to the ID that’s on our list and false on all other indices. When a user swipes their card, their ID is ran through the same hash function and lookup is performed for the resulting index.

This approach has the following benefits:

- Now we can look up IDs by index, giving us constant time O(1)
- Storing boolean values (usually 1 byte) takes less space than storing the actual IDs (16 bytes each), even though space complexity for both is O(n).
- The hash function can be set up so that the number of indices in our array is fewer than the number of IDs we are storing, further decreasing space requirements.
- If we do set up our hash function so that length of our array < number of valid IDs, we are increasing the chances of collision (more than one ID being assigned to the same index). However, because we are dealing with Boolean values, this is not of concern. For example, if two IDs get assigned to one index, then swiping a card encoded with either of the ID’s will result in “true” being returned and user gaining access. Also, whilst the likelihood of a collision decreases when the length of the array is longer than the number of ID’s, it still exists.

As to the drawbacks:

- Just as two valid ID’s ran through a hashing function can be assigned the same index, so can an invalid ID on a user’s card be assigned an index that’s already assigned to a valid ID on our list. This would result in lookup returning “true” and the unauthorised user gaining access. A hash function which distributes the IDs evenly across the array as well as using an array that’s longer than the number of IDs can decrease the likelihood of this occurring, but will never decrease it to 0. One solution to this problem is to use a perfect hash function which guarantees no collisions- such functions however are purpose-written for the data so every time the list of valid ID’s changes in the cloud, we’d have compute a perfect hash function from scratch, making this impractical.

4. Hash table.

Alternatively, we can store our valid IDs as described above, with one difference: Instead of having indices corresponding to valid IDs store Boolean true, we can have them store the actual ID.

Benefits (as compared to a set):

- We still get O(1) lookup time.
- We get rid of the false positive problem. Even if user’s invalid ID gets assigned an index already shared by a valid ID, we can compare the two IDs at that index and determine whether they match.

Drawbacks:

- We forgo the memory saving which comes from storing 1-byte Booleans over 16-byte IDs.
- Now collisions between valid IDs do become a problem. We can deal with collisions by chaining (the colliding ID’s are stored in a linked list or an array connected to the index in question) or open addressing (having the hash function pick next available index if the first choice has already been assigned to an ID). Regardless of the method, our lookup time will remain O(1) on average, but it can also be O(n) in the worst case scenario (if, by chance, a big number of IDs get assigned to the same index). However, a hash function which distributes the IDs evenly across the array can minimise the likelihood of worst-case scenario occuring.

conclusion:

Array, pointers and linked list can be dismissed outright due to their O(n) time of lookup by iteration. Hash table wins over a set in my opinion since, as a security company, we have to be certain the likelihood of false positives is zero. Hash table’s lookup time of O(1) is comparable the O(log n) lookup via binary search of an ordered array provided n is small. For larger n’s O(1) is preferable to O(log n) and thus I consider hash table the best option.

(NB: If our microcontroller does have a cache, I recommend we resolve collisions in our hash table via open addressing as it’s cache-friendly.

NB2: All the solutions I listed have space complexity of O(n) as the entire list of valid IDs needs to be stored locally)
