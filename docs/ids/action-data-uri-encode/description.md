Uri encode action serializes an uri map.
Returns RFC 3986 uri string.
<br/>

**[Example]**
```
[fragment]
    > string : "nose",
[host]
    > string : "interactor.com",
[path]
    > string : "/over/there",
[port]
    > string : 8042,
[query]
    > string : "name=eric",
[scheme]
    > string : "hola",
[userinfo]
    > string : "user"
--------------------------------
-> return : hola://user@interactor.com:8042/over/there?name=eric#nose
```
