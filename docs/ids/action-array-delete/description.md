This Action deletes the given element from Array. Returns a new Array without the element.
If the element occurs more than once in Array, just the first occurrence is removed.
- array : Array to be deleted.
- element : element to be deleted.

<br/>

**[Example]**
*Ex01)*
```
[array]
  > string : hello
  > string : autoflow
  > string : good
  > string : day
[element]
  > string : day
-----------------------
-> return : ["hello","autoflow","good"]
```

*Ex02)*
```
[array]
  > string : a
  > string : b
  > string : b
  > string : c
[element]
  > string : b
-----------------------
-> return : ["a","b","c"]
```
*If the element occurs more than once in Array, just the first occurrence is removed.*
