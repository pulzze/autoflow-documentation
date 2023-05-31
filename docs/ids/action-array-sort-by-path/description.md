This Action returns sorted Array by path.
- array : Target array
- path : Set sort criteria
- order : Select order type 'ascending' or 'deceding'
- value-type : path's value type.

<br/>

**[Example]**
*Ex01)*
```
[array]
  > object
    > number
      > age : 20
    > string
      > name : eric
  > object
    > number
      > age : 23
    > string
      > name : bob
  > object
    > number
      > age : 21
    > string
      > name : lisa
[path]
  > string : name
[order]
  > string : ascending
[value-type]
  > enum : string
-----------------------
-> return : [{"age":"23","name":"bob"},{"age":20,"name":"eric"},{"age":"21","name":"lisa"}]
```
*Ex02)*
```
[array]
  > object
    > number
      > age : 20
    > string
      > name : eric
  > object
    > number
      > age : 23
    > string
      > name : bob
  > object
    > number
      > age : 21
    > string
      > name : lisa
[path]
  > string : age
[order]
  > string : ascending
[value-type]
  > enum : integer
-----------------------
-> return : [{"age":20,"name":"eric"},{"age":"21","name":"lisa"},{"age":"23","name":"bob"}]
```

