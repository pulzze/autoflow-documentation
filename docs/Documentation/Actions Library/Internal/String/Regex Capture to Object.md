# Regex Capture to Object

Receives a regex, a binary and a replacement, returns a new binary where all matches are replaced by the replacement.

&gt; **Properties**
&gt; 

**String**:                     Location of the string to match against

**Regex**:                     Regex expression to compare

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

The replacement can be either a string or a function. The string is used as a replacement for every match and it allows specific captures to be accessed via N or g{N}, where N is the capture. In case is used, the whole match is inserted. Note that in regexes the backslash needs to be escaped, hence in practice you’ll need to use N and g{N}.

When the replacement is a function, the function may have arity N where each argument maps to a capture, with the first argument being the whole match. If the function expects more arguments than captures found, the remaining arguments will receive “”.

**Example**

A string abcadc is applied regex of ~r/a(b|d)c/ with replacement value of fn _ and option of x -&gt; “[#{x}]” end. The return will be [b][d]