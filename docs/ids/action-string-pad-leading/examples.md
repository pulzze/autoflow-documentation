```
string: "abc"
count: 5
-----
result: "  abc"
```

```
string: "abc"
count: 4
paddings: "12"
-----
result: "1abc"
```

```
string: "abc"
count: 6
paddings: "12"
-----
result: "abc121"
```

```
string: "abc"
count: 5
paddings: ["1", "23"]
-----
result: "abc123"
```
