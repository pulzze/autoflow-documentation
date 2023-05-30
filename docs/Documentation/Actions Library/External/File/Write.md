# Write

The file is opened for writing. It is created if it does not exist. If the file does exist, the previous contents are overwritten.

&gt; **Properties**
&gt; 

**File**:             The file location to write the data

                    E.g. /Users/{user_name}/Documents/sample.txt

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

- Commonly made mistake

Files only take string values. Make sure that the data you are writing is a “TEXT” not an object or array.

Use JSON/encode action to stringify the data