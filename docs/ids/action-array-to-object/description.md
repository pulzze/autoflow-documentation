This Action returns Object type from Array.
<br/>
- array : Target array
- key : key value
<br/>

**[Example]**
```
[array]
  > obejct
    > key : autoflow
    > string : nice
  > string : good
[key]
  > string : autoflow
-----------------------
-> return : {"good":"","nice":{"autoflow":"nice"}}
