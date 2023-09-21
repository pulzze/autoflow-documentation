# Put

Puts the given value under key in map.

 **Properties**
 

**Object**:                   Location of the object to add the value

**Key**:                        Key where the value is added

**Value**:                     The value to add

 **Output**
 

**Output-location**: Location to store the output data

**Example 1**

Let’s say we want to add the value of 3 in the key a of the object

{a: 1, b: 2}

This will return

{a: 3, b: 2}

**Example 2**

Let’s say we want to add the value of 2 in the key b of the object

{a: 1}

Since the key does not exist, it will create a new element and return

{a: 1, b: 2}