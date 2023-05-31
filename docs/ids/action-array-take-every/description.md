This Action returns new Array of every 'nth' element in 'Array', starting with the first element.
The first element is always included, unless 'nth' is 0.
The second argument specifying every 'nth' element must be a non-negative integer.
If 'count' is 0, it returns [].
<br/>
- array : Target array
- nth : want to take nth number.

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
-> return : [1,3,5,7,9]
```
*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[nth]
  > number : 1
-----------------------
-> return : [1,2,3]
```

