**[percent Example]**
```
[query]
  > string : https%3A%2F%2Felixir-lang.org
[type]
  > enum : percent
--------------------------------------------------------------------
-> return :
"https://elixir-lang.org"
```

**[www-form Example]**
```
[query]
  > string : foo=1&bar=2
[type]
  > enum : www-form
--------------------------------------------------------------------
-> return :
{
  "foo": 1,
  "bar": 2,
}
```

**[rfc3986 Example]**
```
[query]
  > string : percent=oh+yes%21
[type]
  > enum : rfc3986
--------------------------------------------------------------------
-> return :
{"percent": "oh+yes!"}
```
