This Action returns true or false if 'contents' exists within 'string' or not.

<br/>

- string : string value
- content : Value want to check it exists within string.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : autoflow
[contents]
  > array
    > string : a
    > string : o
----------------------
-> return : true
```
*Ex02)*
```
[string]
  > string : autoflow
[contents]
  > array
    > string : 1
    > string : a
----------------------
-> return : true
```
*Ex03)*
```
[string]
  > string : autoflow
[contents]
  > array
    > string : 1
    > string : k
----------------------
-> return : false
```
