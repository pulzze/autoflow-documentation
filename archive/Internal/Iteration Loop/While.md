# While

While iteratively apply the values to the actions (inside the iteration) while resulting iteration value is true.

&gt; **Properties**
&gt; 

**Max**:                        Maximum number of times to iterate

&gt; **Output**
&gt; 

**index-location**:         The location each index is stored

**condition-location**:  The location where condition is checked for continuation

**output-location**:       The location where the end result after all the iteration is stored

**Example**

This is similar to following in Javascript.

**Javascript example**

condition-location = true;

index = 0;

while (condition-location) {

condition-location = custom_condition();

index = index + 1; }

Resulting value-location is checked as continuation condition.