This Action returns the ability to parse CSV strings to separate headers and data, and to convert each row into object form.

<br/>

**[Example]**
*Ex01)*
```
[csv]
  > string : name,age
              Aclice, 30
              Bob, 25
[has_headers]
  > boolean : true
-----------------------
-> return : {"data":[{"age":"30","name":"Alice"},{"age":"25","name":"Bob"}],"headers":["name","age"]}
```
*Ex02)*
```
[csv]
  > string : name,age
              Aclice, 30
              Bob, 25
[has_headers]
  > boolean : false
-----------------------
-> return : {"data":[{"0":"name","1":"age"},{"0":"Alice","1":"30"},{"0":"Bob","1":"25"}],"headers":[]}
```
