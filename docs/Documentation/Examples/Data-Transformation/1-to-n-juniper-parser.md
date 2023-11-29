---
sidebar_position: 3
title: Data Transformation 1 to N Juniper Log Parser
sidebar_label: 1 to N Juniper Log Parser
description: Transform log in string format into an object
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - juniper
  - parser
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

# 1 to N Juniper Log Parser

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Receive log from Juniper and split the records into an array of entries.</p>
          <p>In this example, real log from the Juniper which is in a string format is normalized into a standardized JSON format.</p>
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
| Action <br/>[string/split-by](../../../Documentation/actions-library/data/string/action-string-split-by/)    | This Action returns array that divides a string into parts based on a pattern.    |
| Action <br/>[string/split-by-newline](../../../Documentation/actions-library/data/string/action-string-split-by-newline/)    | This Action returns array that splits a given string based on a newline.    |
| Action <br/>[array/drop](../../../Documentation/actions-library/data/array/action-array-drop/)    | This Action returns array that divides a string into parts based on a pattern.    |
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[string/split](../../../Documentation/actions-library/data/string/action-string-split/)    | This Action returns array that divides a string into parts based on a pattern.    |

</details>


## Detail

The service has a single input:
- syslog: a string that has multiple lines of record.

```bash
last pid:  8197;  load averages:  0.65,  0.46,  0.42  up 21+12:45:04    22:32:33
107 processes: 4 running, 88 sleeping, 15 waiting

Mem: 163M Active, 90M Inact, 64M Wired, 72M Cache, 61M Buf, 92M Free
Swap:


  PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND
   11 root          1 171   52     0K  3024K RUN    367.5H 68.75% idle
 8193 qatest        1 123    0 20300K 13364K RUN      0:01 34.34% cli
 8191 root          1 107    0  6648K  3040K select   0:00 12.81% sshd
 1208 root          1   8    0   135M 13640K nanslp  50.8H  1.03% pfem
 1205 root          1   4    0 80828K  9992K kqread 911:00  0.83% chassism
 1243 root          1  97    0  9120K  5676K select 100:30  0.05% license-check
```

The goal of the operation is to extract the IP address and port number from each record (each line).

The return should be an array of objects like:

```js
[
  {
    "WCPU": "68.75%",
    "COMMAND": "idle"
  },
  {
    "WCPU": "34.34%",
    "COMMAND": "cli"
  }
  ...
]
```

## Content

### INPUT: HTTP Request

#### 1: Create an API endpoint

:::note Required Concepts
Learn how to create an [API](../../../Documentation/Examples/API/#1-create-api). 
:::

<details open>

<summary>Create an API</summary>

- ID: `sample-data-transformation`

</details>

<details open>

<summary>Create an API Path</summary>

- Path: `/1-to-n-juniper-parser`
- Method: <span class="method post">POST</span>

</details>

#### 2. Create a Server Operation

:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->

<details open>

<summary>Create a Server</summary>

Go to the Server section and create a new Server.

- Server ID: `sample-data-transformation`
- Port Number: `1114`  Feel free to select your own port number
- Linked API: `sample-data-transformation`  (select the API you created above)

</details>

<details open>

<summary>Create a Server Operation</summary>

<!-- <img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/> -->

- Press the "Add API Operation"
- Select the API endpoint created above


</details>

#### 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

<!-- <img src={SimulateData} alt="Simulate Data" class="myResponsiveImg" width="750px"/> -->

We will use the "real data" to create the test simulation.

<details open>

<summary>1. Send a HTTP request from Postman or CURL</summary>

<b>cURL</b>

```bash
curl --location 'localhost:1116/example' \
--header 'Content-Type: text/plain' \
--data 'last pid:  8197;  load averages:  0.65,  0.46,  0.42  up 21+12:45:04    22:32:33
107 processes: 4 running, 88 sleeping, 15 waiting

Mem: 163M Active, 90M Inact, 64M Wired, 72M Cache, 61M Buf, 92M Free
Swap:


  PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND
   11 root          1 171   52     0K  3024K RUN    367.5H 68.75% idle
 8193 qatest        1 123    0 20300K 13364K RUN      0:01 34.34% cli
 8191 root          1 107    0  6648K  3040K select   0:00 12.81% sshd
 1208 root          1   8    0   135M 13640K nanslp  50.8H  1.03% pfem
 1205 root          1   4    0 80828K  9992K kqread 911:00  0.83% chassism
 1243 root          1  97    0  9120K  5676K select 100:30  0.05% license-check'
```

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->

</details>

<details open>

<summary>2. Check the data is received by the server endpoint</summary>

API Autoflow captures the data received and it can be used to create data simulation.

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->

</details>

### Action(s)

:::tip Required Concepts
Learn how to create a [Actions](../../../Documentation/Guide/Workflow/Action/). 
:::

Add actions to transform the data.

You can think of yourself as a cook. The big chunk of string you received is like a block of meat that you need to cut down into pieces for your recipe.

#### 1. Split the document with the column header

The first big cut you are going to make is isolating the table.
We can use **String/split-by** action to split with the table header `PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND`.

<details open>

<summary>String Split By</summary>

###### SETTINGS

> **string**: <u>data</u> [**request**: `body`] <br/>
> **pattern**: <u>array</u> 
>> <u>string</u> <code>PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND</code>

###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>

#### 2. Split the table in each line

Now that we have the table isolated, we can cut each line into a separate entry.

Note that original string was split into two pieces and we are working with the second piece stored in **variable**: `output > 1`.

<details open>

<summary>String Split by New Line</summary>

###### SETTINGS

> **string**: <u>data</u> [**variable**: `output > 1`] <br/>

###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>


#### 3. Remove the unwanted first line

During the split, the first line is created with an empty value.  We can easily remove that by using Array drop action.

In the action setting, we are dropping 1 entry from the array that was created (output) from the previous action.

<details open>

<summary>Array Drop</summary>

###### SETTINGS

> **array**: <u>data</u> [**variable**: `output` <br/>]
> **count**: <u>number</u> `1`

###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>



#### 4. Remove the unwanted first line

- : We will be iterating over the list of records that's saved in the scope `variable: output`.<br/>
The previous action "string/split-by-newline" stored the output in the scope "variable: output".
- : This is a special scope that exists only in the iteration. It is used to store the values as it iterates over the array. <br/>
In our example, we will call it `ip-port`.

<details open>

<summary>Iteration Map</summary>

:::note Required Concepts
Learn how to use [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/) actions.
:::

###### SETTINGS

> **ITERATE**: <u>data</u> [**variable**: `output`]<br/>
> **SCOPE**: <u>string</u> `loop-var`


<details open>

<summary>String/Split:  Split each value</summary>

As each line gets iterated, we can further split at every whitespace to isolate each value

###### SETTINGS

> **string**: <u>data</u> [**loop-var**: `value`] <br/>

###### OUTPUT

> **variables**: `output` <br/>

<details>

<summary>View image</summary>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>
</details>

<details open>

<summary>RETURN:  Create a NEW object</summary>

Now that we have isolated the data we need, we can create a NEW object to store the data.

###### SETTINGS

> **WCPU**: <u>data</u> [**variable**: `output > 9`] <br/>
> **COMMAND**: <u>data</u> [**variable**: `output > 10`]

###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>






###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>



### Step 4 : Add Action ""


#### Configure iteration map


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