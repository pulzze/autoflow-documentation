Accepts option to encode into upper or lower case base 32 encoded string. Defaults to upper.
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
-> return : "MZXW6YTBOI======"
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
-> return : "mzxw6ytboi======"
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
-> return : "mzxw6ytboi======"
```
