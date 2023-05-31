This Action returns your Service results.
<br/>

- serviceOperationReference : Select your Service Operation.

<br/>

**[Example]**
Suppose your Service(name : hi) has
Action's output is { variables : output (has 3.14) }.
<br/>

**Service(name : hi)**
```
Output ID : hello
  > data
    > variables : output
```

<br/>

**Action - Service/Operation**
```
serviceOperationReference
  > hi 0.0.0
-------------------------
-> return : {"hello":"3.14"}
```

