This action divide a given array into subarrays of a certain size.
<br/>
- array : The source array to be partitioned.
- count : The value that determines the size of the subarray.
- step : The interval between each chunk when splitting the array.
- leftover : Determines how the remaining elements are handled at the end of the chunk.
<br/>

**[Example]**
*Ex01)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
  > number : 4
  > number : 5
  > number : 6
[count]
  > number : 3
[step]
  > number : 2
[leftover]
  > array : empty
---------------------
-> return : [[1,2,3],[3,4,5],[5,6]]
```

*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
  > number : 4
  > number : 5
  > number : 6
[count]
  > number : 3
[step]
  > number : 2
[leftover]
  > array
    > number : 7
---------------------
-> return : [[1,2,3],[3,4,5],[5,6,7]]
```

*Ex03)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
  > number : 4
  > number : 5
  > number : 6
[count]
  > number : 2
[step]
  > number : 3
[leftover]
  > array : empty
---------------------
-> return : [[1,2],[4,5]]
```

