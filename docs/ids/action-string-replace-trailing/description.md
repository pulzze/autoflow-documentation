This Action returns new string that replaces all trailing occurrences of 'pattern' by replacement in string.
Returns the string untouched if there are no occurrences.
<br/>

- string : string value
- pattern : string, a regular expression, or a compiled pattern.
- replacement : May be a string or number that receives the matched pattern and must return the replacement as a string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : "hello world"
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
  > string : "hello world world"
[pattern]
  > string : " world"
[replacement]
  > string : " eric"
-----------------------
-> return : hello eric eric
```
