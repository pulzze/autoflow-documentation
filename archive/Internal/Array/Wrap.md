# Wrap

Wraps term in a list if this is not listed. If term is already a list, it returns the list. If term is nil, it returns an empty list.

&gt; **Properties**
&gt; 

**Element**:     the value to turn into an array

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

&gt; **Example**
&gt; 

String “hello” will output [“hello”]

Array [1, 2, 3] will output [1, 2, 3]

nil will output []