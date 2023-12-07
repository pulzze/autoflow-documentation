import Example1 from '@site/static/img/action-library/math/calculate/example-1.jpg';
import Example2 from '@site/static/img/action-library/math/calculate/example-2.jpg';

#### <Example 1>

**expression**
```
a && b
```
In the above example, `a` and `b` are the variables

**variables**

```json
{
  a : true
  b : false
}
```

<img src={Example2} alt="Math Action using Boolean" class = "myResponsiveImg" width="300"/>

Variable is configured as an object.  Above variable has two values with keys `a` and `b` with boolean values.

**returns**
```
false
```

<br />

#### <Example 2>

**expression**
```
a + b
```

**variables**

```json
{
  a : 2
  b : 7
}
```

<img src={Example1} alt="Math Action using Numbers" class = "myResponsiveImg" width="300"/>

Variable is configured as an object.  Above variable has two values with keys `a` and `b` with number values.

**returns**
```json
7
```

#### <Example 3>

**expression**
```
:Math.sqrt(a)
```

**variables**

```json
{
  a : 4
}
```

Variable is configured as an object.  Above variable has one value with key `a` with number values.

**returns**
```json
2
```