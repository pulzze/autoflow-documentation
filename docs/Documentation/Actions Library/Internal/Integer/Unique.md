# Unique

Generates and returns an integer that is unique in the current runtime instance.

“Unique” means that this function never return the same integer more than once on the current runtime instance.

&gt; **Properties**
&gt; 

**Positive**:      the returned integer is guaranteed to be positive

**Monotonic**:      the returned integer is monotonically increasing. This means that, on the same runtime instance (but even on different processes), integers returned using the monotonic modifier will always be strictly less than integers returned by successive calls with the monotonic modifier

&gt; **Output**
&gt; 

Output-location: Location to store the output data