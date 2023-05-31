This action returns new string by replacing 'variable' with its value in a given string.
Gets 'variables' to interpolate and their corresponding values from 'variable'.
'format' determines the format of the string. By default, the format "${}" is used and can be changed to "<%=" if necessary.

<br/>

- string : string value
- format : Determines the format of string.
- variable : To interpolate and their corresponding values.

<br/>

**[Example]**
```
[string]
  > string : hello. I am ${name}! Today is ${day}.
[format]
  > string :
[variable]
  > object
    > string
      > name : eric
    > string
      > day : nice day
----------------------------
-> return : hello. I am eric! Today is nice day.
```
