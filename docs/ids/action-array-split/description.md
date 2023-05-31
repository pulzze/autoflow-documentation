This Action returns new split Array.
Splits Array into two Arrays, leaving 'count' elements in the first one.
If 'count' is a negative number,
it starts counting from the back to the beginning of Array.
- array : Target array
- count : number of elements to split.

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
-> return : [[1,2],[3]]
```
*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[count]
  > number : -5
-----------------------
-> return : [[],[1,2,3]]
```

