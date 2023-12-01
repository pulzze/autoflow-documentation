---
sidebar_position: 3
title: Data Transformation 1 to N
sidebar_label: 1 to N
description: Transform log into an object
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
---

import img_1to_n_example from '@site/static/img/example/data-transformation/1-to-n/example.png';
import create_service from '@site/static/img/example/data-transformation/1-to-n/create-service.jpg';
import data_simulation from '@site/static/img/example/data-transformation/1-to-n/data-simulation.jpg';
import data_simulation_create from '@site/static/img/example/data-transformation/1-to-n/data-simulation-create.jpg';
import data_simulation_check from '@site/static/img/example/data-transformation/1-to-n/data-simulation-check.jpg';
import string_split_action from '@site/static/img/example/data-transformation/1-to-n/string-split-action.jpg';
import string_split_action_check_output from '@site/static/img/example/data-transformation/1-to-n/string-split-action-check-output.jpg';
import iteration_map from '@site/static/img/example/data-transformation/1-to-n/iteration-map.jpg';
import string_split_by_action from '@site/static/img/example/data-transformation/1-to-n/string-split-by-action.jpg';
import string_split_by_action_check_output from '@site/static/img/example/data-transformation/1-to-n/string-split-by-action-check-output.jpg';
import service_return from '@site/static/img/example/data-transformation/1-to-n/service-return.jpg';
import service_check_output from '@site/static/img/example/data-transformation/1-to-n/service-check-output.jpg';
import service_output_mapping from '@site/static/img/example/data-transformation/1-to-n/service-output-mapping.jpg';
import service_operation_config from '@site/static/img/example/data-transformation/1-to-n/service-operation-config.jpg';
import service_operation_check_output from '@site/static/img/example/data-transformation/1-to-n/service-operation-check-output.jpg';

# 1 to N

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received data from a single source such as a log and split the records into an array of entries.</p>
          <p>In this example, syslog from the Cisco ASA 302013 firewall which is in a string format is normalized into a standardized JSON format.</p>
          <p>A <a href="../../../Documentation/Guide/Service/">Service</a> (equvalent to a function in programming) will be used for this example.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=aiJoS3eM6Jw"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>
<br />
<img src={img_1to_n_example} alt="1 to N example" class="myResponsiveImg" width="800px"/>

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [Service](../../../Documentation/Guide/Service/)  | Service is a reusable function <ol><li>Takes in a set of **INPUT** arguments</li><li>Performs set of actions</li><li>Gives out an **OUTPUT**</li></ol> |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types   | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[string/split-by-newline](../../../Documentation/actions-library/data/string/action-string-split-by-newline/)    | This Action returns array that splits a given string based on a newline.    |
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[string/split-by](../../../Documentation/actions-library/data/string/action-string-split-by/)    | This Action returns array that divides a string into parts based on a pattern.    |

</details>


## Detail

The service has a single input:
- syslog: a string that has multiple lines of record.

```bash
%ASA-6-302013: TCP connection 933 OUTSIDE:172.217.169.68
%ASA-6-302013: TCP connection 935 OUTSIDE:23.40.43.75
```

The goal of the operation is to extract the IP address and port number from each record (each line).

The return should be an array of objects like:

```js
[
  {
    "ip": "172.217.169.68",
    "port": "933 "
  },
  {
    "ip": "23.40.43.75",
    "port": "935 "
  }
]
```

## Content

### Step 1: Create a new Service and add INPUT/OUTPUT arguments

:::tip Required Concepts
Learn how to create a [Service](../../../Documentation/Guide/Service/) and add new INPUT/OUT arguments. 
:::

We will be passing values in the below INPUT arguments and return the data from below OUTPUT argument.

#### INPUT arguments
- syslog

#### OUTPUT arguments
- result

<img src={create_service} alt="N to 1 example" class="myResponsiveImg" width="600px"/>

:::note

The service can be called from any workflow using the [service/operation](../../../Documentation/actions-library/call/service/action-service-operation.mdx/) action.

:::


### Step 2. Simulation Mock Data
:::tip Required Concepts
Learn how to [simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/) the mock data. 
:::

#### Add Test Simulation 1: `cisco-asa`
Enter below value in the INPUT "syslog" simulation.

```bash
%ASA-6-302013: TCP connection 933 OUTSIDE:172.217.169.68
%ASA-6-302013: TCP connection 935 OUTSIDE:23.40.43.75
```
<img src={data_simulation_create} alt="N to 1 Simulation Check" class="myResponsiveImg" width="600px"/>

#### Check in right pane

<img src={data_simulation} alt="1 to N example simulation check" class="myResponsiveImg" width="400px"/>

:::note

The service INPUT arguments that was created in step 1 is what's being used to create the service simulation.

:::

### Step 3 : Add Action "Split By New Line"
:::tip Required Concepts
Learn how to [add an action](../../../Documentation/actions-library/) and use [string/split-by-newline](../../../Documentation/actions-library/data/string/action-string-split-by-newline/) actions.
:::


#### 1. Select "syslog" Simulation

If it is not already selected, select the "cisco-asa" from the INPUT Data Simulation.
We will use the simulated data from "cisco-asa" to configure the workflow.
<img src={data_simulation_check} alt="N to 1 Simulation Check" class="myResponsiveImg" width="600px"/>

#### 2. Configure string/split-by-newline action
The string that we are splitting is the value from INPUT "syslog"
<img src={string_split_action} alt="String Split Action" class="myResponsiveImg" width="800px"/>


#### 3. Check the Action Output
:::tip Required Concepts
Learn more about <a href="/docs/Documentation/Guide/Workflow/action/check-output">Check Action Output</a>.
:::

- The OUTPUT of the action is stored in the SCOPE `variable: output` by default. You can assign your own variable if you'd like.
- Press the "Action Output" tab to check that the string is split into an array of records.

<img src={string_split_action_check_output} alt="String Split Action" class="myResponsiveImg" width="800px"/>


### Step 4 : Add Action "Iteration Map"
:::tip Required Concepts
Learn how to use [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/) actions.
:::

#### Configure iteration map
- ITERATE: We will be iterating over the list of records that's saved in the scope `variable: output`.<br/>
The previous action "string/split-by-newline" stored the output in the scope "variable: output".
- SCOPE: This is a special scope that exists only in the iteration. It is used to store the values as it iterates over the array. <br/>
In our example, we will call it `ip-port`.

<img src={iteration_map} alt="String Split Action" class="myResponsiveImg" width="800px"/>

:::info
You can not access iteration scope outside the iteration.
:::

### Step 5 : Add Action "String Split" Inside the Iteration
:::tip Required Concepts
Learn how to use [string/split-by](../../../Documentation/actions-library/data/string/action-string-split-by/) actions.
:::

Similar to how the earlier [string/split-newline](Documentation/actions-library/data/string/action-string-split-by-newline.mdx) action to split the string on a new line;

An action [string/split-by](Documentation/actions-library/data/string/action-string-split-by.mdx) will be used to further split the string based on patterns to isolate the values.

#### 1. Configure "String Split By" Action
- string: We are splitting each string stored in the [iteration scope](../../../Documentation/Guide/Workflow/Scope/#iteration-scope) `ip-port`
- patterns:
  - IP address is behind the pattern `OUTSIDE: `
  - Port Number is behind the pattern `connection `

##### Reference
<pre>
%ASA-6-302013: TCP <b>connection </b>933 <b>OUTSIDE:</b>172.217.169.68
</pre>

By splitting the record at above patterns, we will be able to isolate the IP address and port numbers.

<img src={string_split_by_action} alt="String Split By Action" class="myResponsiveImg" width="800px"/>

#### 2. Check the Action Output
- The OUTPUT of the action is stored in the SCOPE `variable: output` by default. You can assign your own variable if you'd like.
- Press the "Action Output" tab to check that the string is split into an array with the port number and IP address isolated.

<img src={string_split_by_action_check_output} alt="String Split By Action Check Output" class="myResponsiveImg" width="800px"/>


### Step 6: Map Return Value

Let's create a new object with keys `ip` and `port`.

**Return configuration**
- Select `object` as the return data type
- Add keys `ip` and `port`
- Map the values from the variable to each key

<img src={service_return} alt="Condition Switch Default Return" class="myResponsiveImg" width="800px"/>


#### Check the OUTPUT of Condition/Switch

Notice that we now have an array of IP addresses and Port numbers.

<img src={service_check_output} alt="Condition Switch Check Output" class="myResponsiveImg" width="700px"/>

### Step 7 : Map the Action and Service OUTPUTs

Finally, you can map the OUTPUT from the workflow to the Service OUTPUT
- Action's OUTPUT were all save to the scope "variable: output"
- Map the Service's OUTPUT `result` with the "variable: output"

<img src={service_output_mapping} alt="Condition Switch Check Output" class="myResponsiveImg" width="800px"/>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

### Step 7 : Calling the Service using the Service Operation Action
:::tip Required Concepts
Learn how to call services using the <a href="/docs/Documentation/actions-library/call/service/action-service-operation/">Service/Operation</a> action.

Also, you may want to learn how to create a [server](../../../Documentation/Guide/Server) if you wish to call the service using a HTTP server.
:::

Create a [server](../../../Documentation/Guide/Server) and add the <a href="/docs/Documentation/actions-library/call/service/action-service-operation/">Service/Operation</a> action.

#### 1. Select the Service and insert the values

<img src={service_operation_config} alt="Service Operation Configuration" class="myResponsiveImg" width="800px"/>

#### 2. Check the output.

<img src={service_operation_check_output} alt="Service Operation Check Output" class="myResponsiveImg" width="700px"/>

:::note
HTTP server can received data in the Request Body in a JSON format or URL parameters.
Download the example to see how JSON data in request body is used.
::: 