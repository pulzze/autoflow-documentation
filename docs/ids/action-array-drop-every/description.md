This Action returns new Array of every nth element in Array dropped, starting with the first element.
The first element is always dropped, unless nth is 0.
The second argument specifying every nth element must be a non-negative integer.
- array : Array to be drop.
- nth : want to drop nth number.

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
  > number : 8
  > number : 9
  > number : 10
[nth]
  > number : 2
-----------------------
-> return : [2, 4, 6, 8, 10]
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
  > number : 8
  > number : 9
  > number : 10
[nth]
  > number : 0
-----------------------
-> return : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
