This Action returns returns a new string padded with a leading filler which is made of elements from 'padding'.
Passing a list of strings as 'padding' will take one element of the list for every missing entry.
If the list is shorter than the number of inserts, the filling will start again from the beginning of the list.
Passing a string 'padding' is equivalent to passing the list of graphemes in it.
When 'count' is less than or equal to the length of 'string', given 'string' is returned.
<br/>

- string : string value
- count : The total length of the string
- paddings : Added at the beginning of the string.

<br/>

**[Example]**
```
[string]
  > string : abc
[count]
  > number : 5
[paddings]
  > array
    > string : 1
    > string : 23
-----------------------
-> return : 123abc
```
