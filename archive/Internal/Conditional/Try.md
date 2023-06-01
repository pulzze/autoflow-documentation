# Try

Try and/or Retry the “do” flow with rescue and if fail, perform “catch” flow.

&gt; **Properties**
&gt; 

**retry**:                       Number of retries if flow fails

**retry-delay**:           Number or String Delay between retries

&gt; **Example**
&gt; 

Retry delay can be configured to be fixed or to be dynamic.

1. Configure retry-delay as a number, and a fixed delay will be introduced between retries
2. Configure retry-delay as a string, and the string will be evaluated to produce an integer delay value. The expression may make use of a variable “retry_count”. e.g. retry_count * 1000