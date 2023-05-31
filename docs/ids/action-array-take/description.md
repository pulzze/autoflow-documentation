This Action returns new Array. Takes 'count' of elements from the beginning or the end of 'Array'.
If a positive 'count' is given, it takes 'count' elements from the beginning of 'Array'.
If a negative 'count' is given, 'count' of elements will be taken from the end.
The Array will be enumerated once to retrieve the proper index and the remaining calculation is performed from the end.
If 'count' is 0, it returns [].
<br/>
- array : Target array
- count : number of taking elements.

<br/>

**[Example]**
*Ex01)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[count]
  > number : 2
-----------------------
-> return : [1,2]
```
*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[count]
  > number : -1
-----------------------
-> return : [3]
```

