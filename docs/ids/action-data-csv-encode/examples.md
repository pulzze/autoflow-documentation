```
[headers]
  > array
      > string : name
      > string : age
[data]
  > array
    > obejct
        > name
          > string : Alice
        > age
          > number : 30
    > obejct
        > name
          > string : Bob
        > age
          > number : 25
---------------------------
-> return : name,age
            Alice,30
            Bob,25
```

```
[headers]
  > array
      > string : id
      > string : pw
[data]
  > array
    > obejct
        > id
          > string : hello
        > pw
          > string : mypw
    > obejct
        > id
          > string : hola
        > pw
          > string : pwmy
---------------------------
-> return : id,pw
            hello,mypw
            hola,pwmy
```