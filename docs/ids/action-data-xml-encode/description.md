This Action provides the ability to convert a given data structure into XML string.
<br/>

**[Example]**
```
[data]
  > object
    > object : person
        > attribute : string : ""
        > obejct : value
            > object : age
                > attribute : string : ""
                > value : number : 30
            > object : name
                > attribute : string : ""
                > value : string : "eric"
------------------------------------------
-> return : <person><age>30</age><name>eric</name></person>
```
