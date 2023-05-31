This action returns new object with keys mapped to new keys.

- object : object value
- map : want to map keys with the object.

<br/>

**[Example]**
*Ex01)*
```
[object]
  > object
      name : eric
      age : 22
[map]
  > object
      name : first_name
----------------------
-> return : {"first_name" : "eric", "age" : 22}
```
*Ex02)*
```
[object]
  > object
      a : 1
      b : 2
[map]
  > object
      a : c
      b : d
----------------------
-> return : {"c": 7, "d": 2}
```

