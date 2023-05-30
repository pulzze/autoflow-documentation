# Put New

Puts the given value under key only if the entry key does not exists in the map.

&gt; **Properties**
&gt; 

**Object**:                   Location of the object to add the value

**Key**:                        Key where the value is added

**Value**:                     The value to add

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

**Example 1**

Let’s say we want to add the value of 3 in the key a of the object

{a: 1, b: 2}

This will return

{a: 1, b: 2}

**Example 2**

Let’s say we want to add the value of 2 in the key b of the object

{a: 1}

Since the key does not exist, it will create a new element and return

{a: 1, b: 2}