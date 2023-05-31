This Action returns Flattens the given Array of nested Array.
Empty Array elements are discarded.
- array : Target array

<br/>

**[Example]**
*Ex01)*
```
[array]
  > number : 1
  > array
    > number : 2
    > number : 3
-----------------------
-> return : [1,2,3]
```

*Ex02)*
```
[array]
  > array
  > array
-----------------------
-> return : []
```
