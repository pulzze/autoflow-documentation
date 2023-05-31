This Action returns new value that joins the given Array into a string using 'separator'.
If 'separator' is not passed at all, it defaults to an empty string.
All elements in Array must be convertible to a string, otherwise an error is raised.

- array : Target array.
- separator : Value you want to put in Array's joiner.
<br/>

**[Example]**
*Ex01)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[separator]
  > string
-----------------------
-> return : 123
```


*Ex02)*
```
[array]
  > number : 1
  > number : 2
  > number : 3
[separator]
  > string : =
-----------------------
-> return : 1=2=3
```
