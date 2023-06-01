# Split With

Divides a string into parts based on a pattern.

&gt; **Properties**
&gt; 

**String**:                     Location of the string to split

**Pattern**:                  String patern to start the slice

**Parts**:                      Number of new strings to generate

**Trim**:                        Remove empty strings

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

Returns a list of these parts. The pattern can be a string, a list of strings, a regular expression, or a compiled pattern. The string is split into as many parts as possible by default, but can be controlled via the parts option. Empty strings are only removed from the result if the trim option is set to true. When the pattern used is a regular expression, the string is split using Regex Split action

**Example**

Applying the String Split At action to the string ” Hello World ” with a pattern of “ ” and trim “true” will return

[“Hello”, “World”]