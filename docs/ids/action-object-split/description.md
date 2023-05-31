This Action returns split objects.
Takes all entries corresponding to the given 'keys' in 'object' and extracts them into a separate 'object'.
Returns a tuple with the new 'object' and the old 'object' with removed keys.
<br/>

- object : object value
- keys : Criteria key to split from object.

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
  > string : b
  > string : e
----------------------
-> return : [{"a":1,"c":3},{"b":2}]
```

