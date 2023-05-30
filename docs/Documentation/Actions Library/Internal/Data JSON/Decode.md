# Decode

Parses a string as a subset of YAML, and produces a representation of its value.

&gt; **Properties**
&gt; 

**YMAL**:        Location of the YMAL

&gt; **Output**
&gt; 

**Output-location**: The location to store the output data

&gt; **Example**
&gt; 

A string value of

"{a: [1, 2, 3], b: foo}"

will parse to

{

"a" = [

1,

2,

3,

]

"b" = “foo”

}