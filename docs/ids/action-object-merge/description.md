This action returns new object which Merges two 'object' into one.
All keys in 'with' will be added to 'object', overriding any existing one
(i.e., the keys in 'with' "have precedence" over the ones in 'object')
<br/>

- object : object value
- with : want to merge with the object.

<br/>

**[Example]**
*Ex01)*
```
[object]
  > object
      name : eric
      age : 22
[with]
  > object
      id : 105
      job : devloper
----------------------
-> return : {"name" : "eric", "age" : 22 , "id" : 105 , "job" : "devloper"}
```
*Ex02)*
```
[object]
  > object
      a : 1
      b : 2
[with]
  > object
      a : 7
      c : 5
----------------------
-> return : {"a":7,"b":2,"d":5}
```

