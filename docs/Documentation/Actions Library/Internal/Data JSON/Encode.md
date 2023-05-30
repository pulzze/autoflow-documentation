# Encode

Encodes a given value to a string using YAML 1.2 block syntax.

&gt; **Properties**
&gt; 

**Data**:                       Location of the data

&gt; **Output**
&gt; 

**Output-location**: The location to store the output data

&gt; **Example**
&gt; 

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