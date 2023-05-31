This Action returns new string that replaces suffix in 'string' by replacement if it matches 'pattern'.
Returns the string untouched if there is no 'pattern'. If match is an empty string (""), 'replacement' is just prepended to string.
<br/>

- string : string value
- pattern : string, a regular expression, or a compiled pattern.
- replacement : May be a string or number that receives the matched pattern and must return the replacement as a string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : "hello"
[pattern]
  > string : " world"
[replacement]
  > string : ""
-----------------------
-> return : hello
```
*Ex02)*
```
[string]
  > string : "hello"
[pattern]
  > string : ""
[replacement]
  > string : " world"
-----------------------
-> return : hello world
```
