This Action breaks Operation, then returns results that 'Scope' on values.
<br/>
- body : Request Body.
- headear : Request Header.
- status_code : Write status code number.
<br/>

**[Example]**
Suppose previous Action returns 'variables: output' has 'hello'.

```
[Mapping]
  [body]
      > data
          > variables : output
  [header]
      > undefined
  [status_code]
      > undefined
---------------------------------
-> return : hello
```


