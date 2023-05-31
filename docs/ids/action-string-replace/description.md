This Action returns a new string created by replacing occurrences of 'pattern' in 'string' with 'replacement'.
'pattern' is string, a regular expression, or a compiled pattern.
'replacement' may be a string or number that receives the matched pattern and must return the replacement as a string.
<br/>

- string : string value
- pattern : string, a regular expression, or a compiled pattern.
- replacement : May be a string or number that receives the matched pattern and must return the replacement as a string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : a,b,c
[pattern]
  > string : ,
[replacement]
  > string : -
-----------------------
-> return : a-b-c
```
*Ex02)*
```
[string]
  > string : a,b,c
[pattern]
  > string : ,
[replacement]
  > string : 0
-----------------------
-> return : a0b0c
```
