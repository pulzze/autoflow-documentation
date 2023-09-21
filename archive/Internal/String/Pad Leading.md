# Pad Leading

Pads the leading part of the string.  Makes the total string length equal to count and inserts padding in the front. Returns a new string padded with a leading filler which is made of elements from the padding.

 **Properties**
 

**String**:                     Location of the string to work on

**Count**:                     Total length of the new string

**Padding**:                 Value to insert in front of the string

 **Output**
 

**Output-location**: Location to store the output data

Passing a list of strings as padding will take one element of the list for every missing entry. If the list is shorter than the number of inserts, the filling will start again from the beginning of the list. Passing a string padding is equivalent to passing the list of graphemes in it. If no padding is given, it defaults to whitespace.

When count is less than or equal to the length of string, given string is returned.

**Example**

A string “abc” applying count of ‘5’ and padding of ‘12’ would return ‘12abc’

A string “abc” applying count of ‘6’ and padding of ‘12’ would return ‘1212abc’