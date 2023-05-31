This Action returns Reverses Array in the range from initial 'index' through 'count' elements.
If 'count' is greater than the size of the rest of the Array, then this Action will reverse the rest of the Array.
- array : Target array
- index : start index to reverse
- count : number of elements to be reversed

<br/>

**[Example]**
```
[array]
  > number : 1
  > number : 2
  > number : 3
  > number : 4
  > number : 5
  > number : 6
[index]
  > number : 2
[count]
  > number : 4
-----------------------
-> return : [1,2,6,5,4,3]
```
