This Action returns true if list starts with the given 'value' otherwise returns false.
If 'value' is an empty list, it returns true.
- array : Target array
- value : prefix Array

<br/>

**[Example]**
*Ex01)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[value]
  > number : 1
  > number : 2
-----------------------
-> return : true
```
*Ex02)*
```
[array]
  > number : 1
  > number : 2
[value]
  > number : 1
  > number : 2
  > number : 3
-----------------------
-> return : false
```

