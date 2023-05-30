# Find Index

Find Value iteratively applies the values to the actions (inside the iteration) while the resulting iteration value is false and returns the value found.

&gt; **Properties**
&gt; 

**Array**:                      Source array to find value from

&gt; **Output**
&gt; 

**index-location**:             The location each index is stored

**value-location**:             The location where each array element is located and where condition is checked for continuation

**output-location**:           The location where the end result after all the iteration is stored

**Example**

This is similar to following in Javascript.

**Javascript example**

value-location = true;

index = 0;

while (!value-location) {

value-location = custom_condition();

index = index + 1; }

return value-location

Resulting value-location is checked as continuation condition.