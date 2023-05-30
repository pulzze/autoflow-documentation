# Sort by Path

Path is an array of keys. So, if you have a complex array with hierarchy of keys, you can give it a path so that it is ordered by the specific key value within the array of objects.

&gt; **Properties**
&gt; 

**Array**:                      Location of the list to sort

**Path**:                       Path is an array of keys

**Order**:                     Ascending or Descending

**Value Type**:            Assign the correct data type to assess

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

&gt; **Example**
&gt; 

Let’s say you have an array

[

{

"a": {

"key1": 5,

"key2": "first"

}

},

{

"a": {

"key1": 2,

"key2": "second"

}

},

{

"a": {

"key1": 3,

"key2": "third"

}

}

]

with Path

[

"a",

"key1"

]

order ascending and value-type integer

**OUTPUT**

Result in “out” is

[

{

"a": {

"key1": 2,

"key2": "second"

}

},

{

"a": {

"key1": 3,

"key2": "third"

}

},

{

"a": {

"key1": 5,

"key2": "first"

}

}

]

**Sample Configuration**

{

"$action": "array/sort-by-path",

"array": [

{

"a": {

"key1": 5,

"key2": "first"

}

},

{

"a": {

"key1": 2,

"key2": "second"

}

},

{

"a": {

"key1": 3,

"key2": "third"

}

}

],

"order": "ascending",

"output-location": {

"__$afref__": "data",

"path": [

"out"

]

},

"path": [

"a",

"key1"

],

"value-type": "integer"

}