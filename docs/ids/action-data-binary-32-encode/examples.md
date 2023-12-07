```
[data]
  > string : "foobar"
[case]
  > upper
[padding]
  > true
-------------------------
-> return : "MZXW6YTBOI======"
```

```
[data]
  > string : "foobar"
[case]
  > lower
[padding]
  > true
-------------------------
-> return : "mzxw6ytboi======"
```

```
[data]
  > string : "foobar"
[case]
  > upper
[padding]
  > false
-------------------------
-> return : "mzxw6ytboi======"
```