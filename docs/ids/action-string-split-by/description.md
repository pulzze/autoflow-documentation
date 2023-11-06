This Action returns array that divides a string into parts based on a pattern.

- string : `string value`
- patterns : `The pattern to slit`

### Examples

#### <Example 1>

**string**
```
a,u,t,o,f,l,o,w
```

**position**
```
,
```

**returns**
```json
["a","u","t","o","f","l","o","w"]
```


#### <Example 2>

**string**
```
a u t o f l o w
```

**position**

" "  (white space)

**returns**
```json
["a","u","t","o","f","l","o","w"]
```