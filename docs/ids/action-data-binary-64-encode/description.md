Accepts option to add padding or not.

**[Example]**
*Ex01)*
```
[data]
  > string : "foobar"
[padding]
  > true
-------------------------
-> return : "Zm9vYmFy"
```
*Ex02)*
```
[data]
  > string : "foob"
[padding]
  > true
-------------------------
-> return : "Zm9vYg=="
```
*Ex03)*
```
[data]
  > string : "foobar"
[padding]
  > false
-------------------------
-> return : "Zm9vYg"
```
