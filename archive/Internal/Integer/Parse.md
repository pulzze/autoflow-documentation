# Parse

Parses a text representation of an integer. An optional base to the corresponding integer can be provided. If base is not given, 10 will be used.

 **Properties**
 

**String**:                     Location of the integer to convert into an ordered digits

**Base**:                       Digit base  E.g. Digit ‘2’ will convert the integer into binary

 **Output**
 

Output-location: Location to store the output data

If successful, returns an object in the form of {integer, remainder_of_binary}. Otherwise error.

Raises an error if base is less than 2 or more than 36.If you want to convert a string-formatted integer directly to an integer, use String to Integer instead.