This Action decodes the ability to convert a given yaml string into data structure.
<br/>

**[Example]**
```
[yaml]
  > string : values:
              - integer : 111
              - string : hello
--------------------------------
-> return : {"values":[{"integer":111},{"string":"hello"}]}
```
