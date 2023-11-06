import DataAfterExecution from "@site/static/img/guide/trace/data_after_execution.png"
import DataReceived from "@site/static/img/guide/trace/data_received.png"
import TraceExecution from "@site/static/img/guide/trace/trace_execution.png"

# Trace

Each time a workflow is executed, API AutoFlow maintains a data set for each transaction. This data set includes data at each point of execution, before and after each action is executed. 

Trace makes this transaction data available for users to see. It captures the available `data` and their corresponding `output` or values as it executes through each workflow components such as actions and conditions. Tracing is often used as a debugging and diagnostic technique to understand and analyze the behavior of a workflow during runtime.

Traces are particularly useful when diagnosing complex issues, understanding the data at each point of the workflow, and identifying logic errors or unexpected behavior. By examining the trace output, developers can gain insights into the workflow's runtime behavior, locate bugs, and make informed decisions on how to fix or improve the code.

## Executing the trace

Simulation needs to be turned on in order to use trace. That's because trace uses the simulated data as the starting point.

Tracing can be done by clicking the Trace button at specific points in the workflow to automatically capture and display the execution flow and variable values as the program runs.

<div class="myResponsiveImg">
    <img src={TraceExecution} alt="Trace Execution" class="myResponsiveImg"/>
</div>

## How to view the data

1. **Data**: Tracing captures the values of relevant variables at a point in the workflow. This can be helpful in understanding how the values change during execution and identifying potential issues or unexpected behavior.

   Data that’s received:

   <div class="myResponsiveImg">
   <img src={DataReceived} alt="Data Received" class="myResponsiveImg"/>
   </div>

2. **Result**: Captures the output or return value, including error conditions.

   Data after execution:

   <div class="myResponsiveImg">
   <img src={DataAfterExecution} alt="Data After Execution" class="myResponsiveImg"/>
   </div>

 **Error messages**: If an error or exception occurs during execution, the trace can provide information about the error message, stack trace, and relevant contextual details to aid in debugging and troubleshooting.

