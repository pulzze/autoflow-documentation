```
[object]
  > object
      id : 115
      pw : qwer
[key]
  > string : id
[value]
  > string : 99
----------------------
-> return : {"id": 99,"pw":"qwer"}
```

*If new 'key' is not present in 'object', then return original 'object'*
```
[object]
  > object
      id : 115
      pw : qwer
[key]
  > string : name
[value]
  > string : eric
----------------------
-> return : {"id": 115,"pw":"qwer"}
```