This Action returns escaped string to be literally matched in a regex.

<br/>

- string : string value

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : .
----------------------------
```
-> return : &#92;.

*Ex02)*
```
[string]
```
  > string : &#92;&#92;what if
```
----------------------------
```
-> return : &#92;&#92;&#92;&#92;what&#92; if

