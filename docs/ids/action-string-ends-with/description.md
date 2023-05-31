This Action returns true if string ends with any of the suffixes given.

<br/>

- string : string value
- suffix : The part that checks whether it is a string included in the end of the string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : autoflow
[suffix]
  > string : flow
----------------------------
-> return : true
```
*Ex02)*
```
[string]
  > string : autoflow
[suffix]
  > string : hello
----------------------------
-> return : false
```
