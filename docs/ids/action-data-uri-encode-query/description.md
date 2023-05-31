Creates query string based on percent, www-form, rfc3986 type selected
Returns query string.
<br/>

**[percent Example]**
```
[query]
    > string : "ftp://s-ite.tld/?value=put it+й",
[type]
    > string : percent
--------------------------------
-> return : ftp://s-ite.tld/?value=put%20it+%D0%B9
```
**[www-form Example]**
```
[query]
    > object : {"key": "value with spaces"},
[type]
    > string : www-form
--------------------------------
-> return : key=value+with+spaces

**[rfc3986 Example]**
```
[query]
    > object : {"key": "value with spaces"},
[type]
    > string : rfc3986
--------------------------------
-> return : key=value%20with%20spaces
```
