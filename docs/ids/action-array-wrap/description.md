This Action returns new Array which is wrapped 'value' in array if this is not array.
If term is already Array, it returns Array. If term is null, it returns an empty Array.
<br/>
- value : want to Array

<br/>

**[Example]**
*Ex01)*
```
[value]
  > string : hello
-----------------------
-> return : ["hello"]
```
*Ex02)*
```
[value]
  > null
-----------------------
-> return : []
```
*Ex03)*
```
[value]
  > array
    > number : 1
    > number : 2
    > number : 3
-----------------------
-> return : [1, 2, 3]
```
