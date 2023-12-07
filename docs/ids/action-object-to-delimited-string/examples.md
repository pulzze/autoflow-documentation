```
[Object]
  > object
    "key1": "value1",
    "key2": "value2"
[Separator]
  > string : "="
[Delimiter]
  > string : ","
[Key Interpolation]
  > string : ""
[Value Interpolation]
  > string : ""
----------------------
-> returns : "key1=value1,key2=value2"
```

```
[Object]
  > object
    "key1": "value1",
    "key2": "value2"
[Separator]
  > string : "="
[Delimiter]
  > string : ","
[Key Interpolation]
  > string : "'${key}'"
[Value Interpolation]
  > string : "'${value}'"
--------------------------
-> return : "'key1'='value1','key2'='value2'"
```
