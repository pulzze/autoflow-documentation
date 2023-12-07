```
array:
[
  {
    "id": "jack",
    "age": 10
  },
  {
    "id": "jill",
    "age": 11
  }
]
key: "id"
-----------------------
return:
{
  "jack": {
    "id": "jack",
    "age": 10
  },
  "jill": {
    "id": "jill",
    "age": 11
  }
}
```

```
array:
[
  ["jack", 10],
  ["jill", 11]
]
-----------------------
return:
{
  "jack": 10,
  "jill": 11
}
```
