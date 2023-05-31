This action returns whether the given 'key' exists in the given 'object'.
<br/>

- object : object value
- key : want to check the object has the key.

<br/>

**[Example]**
*Ex01)*
```
[object]
  > object
      name : eric
      age : 22
[key]
  > string : age
------------------
-> return : true
```
*Ex02)*
```
[object]
  > object
      name : eric
      age : 22
[key]
  > string : city
------------------
-> return : false
```

