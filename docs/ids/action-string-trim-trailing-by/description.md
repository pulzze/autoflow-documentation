This Action returns a string where all trailing 'pattern' characters have been removed.

<br/>

- string : string value
- pattern : want to trim pattern in string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : "_ abc __"
[pattern]
  > string : "_"
----------------------
-> return : "_ abc "
```
*Ex02)*
```
[string]
  > string : "abc 1"
[pattern]
  > string : "11"
----------------------
-> return : "abc 1"
```
