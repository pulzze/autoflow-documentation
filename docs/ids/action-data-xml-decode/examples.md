```
[xml]
  > string : <person><name>Alice</name><age>30</age></person>
--------------------------------
-> return : {
  "person":{
    "attribute":{},
    "value":{
      "age":{
        "attribute":{},
        "value":"30"
      },
      "name":{
        "attribute":{},
        "value":"Alice"
      }
    }
  }
}
```
