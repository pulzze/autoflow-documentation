```
input:
  json: {
    "a": [1, 2],
    "b": 3,
    "c": {
      "d": 4
    }
  }
  wrapper: "value"

output:
  <value>
    <a>1</a>
    <a>2</a>
    <b>3</b>
    <c>
      <d>4</d>
    </c>
  </value>
```