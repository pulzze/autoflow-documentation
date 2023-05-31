Decode query string according to percent, www-form, or rfc3986 type selected
Returns query object.
<br/>

**[percent Example]**
```
[type]
  > string : percent
[query]
  > string : https%3A%2F%2Felixir-lang.org
--------------------------------------------------------------------
-> return :
"https://elixir-lang.org"
```
**[www-form Example]**
```
[type]
  > string : www-form
[query]
  > string : foo=1&bar=2
--------------------------------------------------------------------
-> return :
{
  "foo": 1,
  "bar": 2,
}
```
**[rfc3986 Example]**
```
[type]
  > string : rfc3986
[query]
  > string : percent=oh+yes%21
--------------------------------------------------------------------
-> return :
{"percent": "oh+yes!"}
```
