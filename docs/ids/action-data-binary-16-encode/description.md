Accepts option to encode into upper or lower case base 16 encoded string. Defaults to upper.

<br/>

**[Example]**
*Ex01)*
```
[data]
  > string : "foobar"
[case]
  > upper
-------------------------
-> return : "666F6F626172"
```
*Ex02)*
```
[data]
  > string : "foobar"
[case]
  > lower
-------------------------
-> return : "666f6f626172"
```
