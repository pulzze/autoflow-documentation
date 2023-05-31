This Action encodes a given data string into yaml.
<br/>

**[Example]**
```
[data]
  > object
    > info : array
      > object
        > name : string : Eric
      > object
        > age : number : 30
    > city : string : Seoul
------------------------------------------
-> return : city: "Seoul"
            info:
              - age: 30
                name: "Eric"
```
