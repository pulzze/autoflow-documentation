**[percent Example]**
```
[query]
    > string : "ftp://s-ite.tld/?value=put it+й",
[type]
    > enum : percent
--------------------------------
-> return : ftp://s-ite.tld/?value=put%20it+%D0%B9
```

**[www-form Example]**
```
[query]
    > object : {"key": "value with spaces"},
[type]
    > enum : www-form
--------------------------------
-> return : key=value+with+spaces
```

**[rfc3986 Example]**
```
[query]
    > object : {"key": "value with spaces"},
[type]
    > enum : rfc3986
--------------------------------
-> return : key=value%20with%20spaces
```
