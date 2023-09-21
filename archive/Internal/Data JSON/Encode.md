# Encode

Encodes a given value to a string using YAML 1.2 block syntax.

 **Properties**
 

**Data**:                       Location of the data

 **Output**
 

**Output-location**: The location to store the output data

 **Example**
 

Below data will be encoded

{

"a" = [

1,

2,

3,

]

"b" = “foo”

}

into output of

"{a: [1, 2, 3], b: foo}"