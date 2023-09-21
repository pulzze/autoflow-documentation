# Call

Calls a configured flow.

 **Properties**
 

**flow-id**:                    Select a configured flow

**input**:                       Input data for selected flow

**async**:                     Optionally execute flow asynchronously

**async-timeout**: Timeout duration of asynchronous flow execution

 **Output**
 

**Output-location**: Location to store the output data

**ASYNC option**

async option is used to call the flow in an asynchronous way.

**For example**,

Let’s say you are making 1,000 HTTP calls with an iteration/for-each. If each HTTP call takes 500 ms, it would take 8.3 mins for the process to complete. That is because each call waits for the previous before executing.

Using the async option, you are making all the calls asynchronously without waiting for the previous calls. Which would increase the speed to just a few seconds

async time-out is the time each process will wait before timing out. For example, if the response from the HTTP call in the flow takes longer than the time set, the flow/call action will wait only for the set time before timing out. async time-out is in milliseconds