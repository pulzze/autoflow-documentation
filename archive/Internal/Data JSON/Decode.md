# Decode

Parses a string as a subset of YAML, and produces a representation of its value.

 **Properties**
 

**YMAL**:        Location of the YMAL

 **Output**
 

**Output-location**: The location to store the output data

 **Example**
 

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