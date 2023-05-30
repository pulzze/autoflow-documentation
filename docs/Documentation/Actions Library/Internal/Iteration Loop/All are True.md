# All are True

Returns true if all elements in array are truthy.

When an element has a falsy value (false or nil) iteration stops immediately and false is returned. In all other cases true is returned.

&gt; **Properties**
&gt; 

**Array**:                      Source array to find value from

&gt; **Output**
&gt; 

**index-location**:             The location each index is stored

**value-location**:             The location where each array element is located and where condition is checked for continuation

**output-location**:           The location where the end result after all the iteration is stored

**Example**

Let’s say you have an array [1,2,3] and you want to check whether they are all integers.

Set the property Array to [1,2,3]

Drag-and-drop the data/is-integer action in the iteration box.

Set the property value as value and output as value. The iteration looks at the value data to check whether it is true.

**Sample Configuration**

Click to learn how to paste configuration into your solution.

{

"$action": "organization/group",

"do": [

{

"$action": "data/set",

"at-location": {

"__$afref__": "data",

"path": [

"numbers"

]

},

"name": "Sample Data",

"value": [

1,

2,

3

]

},

{

"$action": "iteration/all-are-true",

"$description": "The result is false because not all numbers in the array [1,2,3] equal 1.",

"$disabled": false,

"array": {

"__$afref__": "data",

"path": [

"numbers"

]

},

"do": [

{

"$action": "data/is-equal",

"output-location": {

"__$afref__": "data",

"path": [

"value1"

]

},

"target": {

"__$afref__": "data",

"path": [

"value1"

]

},

"value": 1

}

],

"index-location": {

"__$afref__": "data",

"path": [

"index1"

]

},

"name": "Example: Iteration False",

"output-location": {

"__$afref__": "data",

"path": [

"result"

]

},

"value-location": {

"__$afref__": "data",

"path": [

"value1"

]

}

},

{

"$action": "iteration/all-are-true",

"$disabled": false,

"array": {

"__$afref__": "data",

"path": [

"numbers"

]

},

"do": [

{

"$action": "data/is-integer",

"output-location": {

"__$afref__": "data",

"path": [

"value2"

]

},

"value": {

"__$afref__": "data",

"path": [

"value2"

]

}

}

],

"index-location": {

"__$afref__": "data",

"path": [

"index2"

]

},

"name": "Example: Iteration True",

"output-location": {

"__$afref__": "data",

"path": [

"result12"

]

},

"value-location": {

"__$afref__": "data",

"path": [

"value2"

]

}

}

],

"name": "Example: Iteration All are True"

}