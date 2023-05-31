This Action returns a subset new Array of the given Array,
from 'index' with 'count' number of elements if available.
Given Array, it drops elements right before element 'index' then,
it takes 'count' of elements, returning as many elements as possible if there are not enough elements.
A negative 'index' can be passed, which means 'Array' is enumerated once
and the index is counted from the end (for example, -1 starts slicing from the last element).
It returns [] if 'count' is 0 or if 'index' is out of bounds.

- array : Target array
- index : start index to slice.
- count : number of elements to slice.

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
  > number : 7
[index]
  > number : 2
[count]
  > number : 3
-----------------------
-> return : [3,4,5]
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
  > number : 7
[index]
  > number : -3
[count]
  > number : 2
-----------------------
-> return : [5,6]
```
