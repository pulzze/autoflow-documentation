This Action returns a new 'object' with all the key-value pairs in 'object' where the key is in keys.
If keys contains keys that are not in 'object', they're simply ignored.

<br/>

- object : object value
- keys : Criteria key to take from object.

<br/>

**[Example]**
```
[object]
  > object
      a : 1
      b : 2
      c : 3
[key]
  > string : a
  > string : c
  > string : e
----------------------
-> return : {"a":1,"c":3}
```

