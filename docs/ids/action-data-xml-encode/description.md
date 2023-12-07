The decoded structure and corresponding XML value is as follows:

XML
```
<root type="example">
  <simple>1</simple>
  <array>2</array>
  <array>3</array>
  <object>
    <key>4</key>
  </object>
</root>
```

Data
```
{
  "root": {
    "attribute": {
      "type": "example"
    },
    "value": {
      "simple": {
        "attribute": {},
        "value": "1"
      },
      "array": [
        {
          "attribute": {},
          "value": "2"
        },
        {
          "attribute": {},
          "value": "3"
        }
      ],
      "object": {
        "attribute": {},
        "value": {
          "key": {
            "attribute": {},
            "value": "4"
          }
        }
      }
    }
  }
}
```
