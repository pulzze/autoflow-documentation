This Action returns values that fits on switch case.
If the input value is not in the case list,
it returns the value of default.

<br/>

**[Example]**
*Ex01)*
```
[value] : data
      > 'variables : output(string > 'hello')'
  [case] : string > 'hello'
  [value] : string > 'hello autoflow'

  [case] : string > 'nice'
  [value] : string > 'nice meet you'

  [default]
  [value] : string > 'good day'
----------------------------
-> return : 'hello autoflow'
```

*Ex02)*
```
[value] : data
      > 'variables : output(string > 'hi')'
  [case] : string > 'hello'
  [value] : string > 'hello autoflow'

  [case] : string > 'nice'
  [value] : string > 'nice meet you'

  [default]
  [value] : string > 'good day'
----------------------------
-> return : 'good day'
```

