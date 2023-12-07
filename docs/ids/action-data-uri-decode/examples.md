```
[uri]
  > string : foo://user@example.com:8042/over/there?name=ferret#nose
--------------------------------------------------------------------
-> return :
{
  "output": {
    "fragment": "nose",
    "host": "example.com",
    "path": "/over/there",
    "port": 8042,
    "query": "name=ferret",
    "scheme": "foo",
    "userinfo": "user"
  }
}
```