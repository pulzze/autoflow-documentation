```
[data]
  > string : "foobar"
[padding]
  > true
-------------------------
-> return : "Zm9vYmFy"
```

```
[data]
  > string : "foob"
[padding]
  > true
-------------------------
-> return : "Zm9vYg=="
```

```
[data]
  > string : "foobar"
[padding]
  > false
-------------------------
-> return : "Zm9vYg"
```