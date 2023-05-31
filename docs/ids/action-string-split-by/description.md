This Action returns array that divides a string into parts based on a pattern.

<br/>

- string : string value
- partterns : Want to split pattern.

<br/>

**[Example]**
*Ex01)*
```
[string]
  > string : a,u,t,o,f,l,o,w
[position]
  > array
    > string : ","
-----------------------
-> return : ["a","u","t","o","f","l","o","w"]
```
*Ex02)*
```
[string]
  > string : a u t o f l o w
[position]
  > array
    > string : " "
-----------------------
-> return : ["a","u","t","o","f","l","o","w"]
```
