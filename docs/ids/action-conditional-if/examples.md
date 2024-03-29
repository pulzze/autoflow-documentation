**[Example]**
*Ex01)*
```
[if]
  [condition] : boolean > true
  [value] : string > 'hello autoflow!'
[else-if]
  [condition] : boolean > false
  [value] : string > 'nice meet you!'
--------------------------------------
-> return : 'hello autoflow!'
```
*Ex02)*

*Suppose that the variable named 'output' has a true or false value in another action.*

*If 'output' is not boolean type, the content is an unfiend value, so you can think of it as false.*
```
[if]
  [condition] : data
          > 'variables : output(boolean > false)'
  [value] : string - 'hello autoflow!'
[else-if]
  [condition] : boolean > true
  [value] : string > 'nice meet you!'
--------------------------------------
-> return : 'nice meet you!'
```

*Ex03)*
```
[if]
  [condition] : data
          > 'variables : output(boolean > true)'
  [value] : string > 'hello autoflow!'
[else-if]
  [condition] : boolean > true
  [value] : string > 'nice meet you!'
--------------------------------------
-> return : 'hello autoflow!'
```
