Converts a given object to a string using separtor and delimiter.
Separator is used to separate key and value.
Delimiter is used to separate between key/value pairs.
Key Interpolation is used to create custom key string using the key. Empty Key Interpolation will default to using key string.
Value Interpolation is used to create custom value string using the vlaue. Empty Value Interpolation will default to using value string.
<br/>

- object : object value
- separator : separator between key and value
- delimiter : delimiter between elements of object
- key interpolation : want to write key Interpolation
- value interpolation : want to write value Interpolation

<br/>

**[Example]**
*Ex01)*
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
*Ex02)*
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
