This action returns new object which puts the given 'value' under 'path' in 'object'
<br/>

- object : object value
- path : want to write new value on path
- value : want to wirte new value of the new path.

<br/>

**[Example]**
```
[object]
  > object
      id : 115
      pw : qwer
[path]
  > array : [name]
[value]
  > string : eric
----------------------
-> return : {"id": 115,"name":"eric","pw":"qwer"}
```

