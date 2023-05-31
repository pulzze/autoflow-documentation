This Action returns array that divides a string into substrings at each Unicode whitespace occurrence with leading and trailing whitespace ignored.
Groups of whitespace are treated as a single occurrence. Divisions do not occur on non-breaking whitespace.
<br/>

- string : string value

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : auto flow
-----------------------
-> return : ["auto","flow"]
```
*Ex02)*
```
[string]
  > string : hello API autoflow
-----------------------
-> return : ["hello","API","autoflow"]
```
