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