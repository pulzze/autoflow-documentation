This Action returns array that splits a string into two at the specified offset.
When the offset given is negative, location is counted from the end of the string.
<br/>

- string : string value
- position : Index number to split at

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : autoflow
[position]
  > number : 4
-----------------------
-> return : ["auto","flow"]
```
*Ex02)*
```
[string]
  > string : autoflow
[position]
  > number : 2
-----------------------
-> return : ["au","toflow"]
```
