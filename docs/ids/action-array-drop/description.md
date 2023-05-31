This Action drops the Count of elements from Array.
If a negative Count is given, the amount of last values will be dropped.
Array will be enumerated once to retrieve the proper index and the remaining calculation is performed from the end.
- array : Array to be drop.
- count : Drop number of elements from Array.

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
-> return : [3]
```

*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[count]
  > number : 0
-----------------------
-> return : [1,2]
```
*If a negative Count is given, the amount of last values will be dropped.*
