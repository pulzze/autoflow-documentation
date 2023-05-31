Accepts option to encode into upper or lower case base 32 encoded string with extended hexadecimal alphabet. Defaults to upper.
Also includes an option to add padding or not.

<br/>

**[Example]**
*Ex01)*
```
[data]
  > string : "foobar"
[case]
  > upper
[padding]
  > true
-------------------------
-> return : "CPNMUOJ1E8======"
```
*Ex02)*
```
[data]
  > string : "foobar"
[case]
  > lower
[padding]
  > true
-------------------------
-> return : "cpnmuoj1e8======"
```
*Ex03)*
```
[data]
  > string : "foobar"
[case]
  > upper
[padding]
  > false
-------------------------
-> return : "CPNMUOJ1E8"
```
