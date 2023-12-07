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

import CreateApi from '@site/static/img/example/data-transformation/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/simulation.jpg';
import CreateServer from '@site/static/img/example/data-transformation/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import StringSplit from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/string-split.jpg';
import StringSplitbyNewLine from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/string-split-by-new-line.jpg';
import ArrayDrop from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/array-drop.jpg';
import IterationMap from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/iteration-map.jpg';
import StringSplitInIteration from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/string-split-in-iteration.jpg';
import ReturnInIteration from '@site/static/img/example/data-transformation/1-to-n-juniper-parser/return-in-iteration.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';


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
          <a target="_blank" href="https://youtu.be/twQed6d5Q1k"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>
<br />

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Documentation/Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Documentation/Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

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

From the **left navigation**, go to the API section and create a new API.

<img src={CreateApi} alt="Create API" class="myResponsiveImg" width="500px"/>

- ID: `sample-data-transformation`

</details>

<details open>

<summary>Create an API Path</summary>

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/1-to-n-juniper-parser`
- Method: <span class="method post">POST</span>

</details>

#### 2. Create a Server Operation

:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

<details open>

<summary>Create a Server</summary>

From the **left navigation**, go to the Server section and create a new Server.

<img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/>

- Server ID: `sample-data-transformation`
- Port Number: `1114`  Feel free to select your own port number
- Linked API: `sample-data-transformation`  (select the API you created above)

</details>

<details open>

<summary>Create a Server Operation</summary>

<img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="900px"/>

- Press the "Add API Operation"
- Select the API endpoint created above


</details>

#### 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

We will use the "real data" to create the test simulation.

<details open>

<summary>1. Send a HTTP request from Postman or cURL</summary>

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1114/1-to-n-juniper-parser' \
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


</details>

<details open>

<summary>2. Check the data is received by the server endpoint</summary>

API Autoflow captures the data received and it can be used to create data simulation.

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="900px"/>

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

<img src={StringSplit} alt="String Split" class="myResponsiveImg" width="800px"/>

###### SETTINGS

> **string**: <u>data</u>
>> [**request**: `body`]
>
> **pattern**: <u>array</u> 
>> <u>string</u> <code>PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND</code>

###### OUTPUT

> **variables**: `output` <br/>

</details>

#### 2. Split the table in each line

Now that we have the table isolated, we can cut each line into a separate entry.

Note that original string was split into two pieces and we are working with the second piece stored in **variable**: `output > 1`.

<details open>

<summary>String Split by New Line</summary>

###### SETTINGS

<img src={StringSplitbyNewLine} alt="String Split by New Line" class="myResponsiveImg" width="800px"/>

> **string**: <u>data</u>
>> [**variable**: `output > 1`] <br/>

###### OUTPUT


> **variables**: `output` <br/>

</details>


#### 3. Remove the unwanted first line

During the split, the first line is created with an empty value.  We can easily remove that by using Array drop action.

In the action setting, we are dropping 1 entry from the array that was created (output) from the previous action.

<details open>

<summary>Array Drop</summary>

###### SETTINGS

<img src={ArrayDrop} alt="Array Drop" class="myResponsiveImg" width="800px"/>

> **array**: <u>data</u>
>> [**variable**: `output`]
>
> **count**: <u>number</u> `1`

###### OUTPUT

> **variables**: `output` <br/>

</details>



#### 4. Remove the unwanted first line

- We will be iterating over the list of records that's saved in the scope `variable: output`.<br/>
The previous action "string/split-by-newline" stored the output in the scope "variable: output".
- This is a special scope that exists only in the iteration. It is used to store the values as it iterates over the array. <br/>
In our example, we will call it `ip-port`.

<details open>

<summary>Iteration Map</summary>

:::note Required Concepts
Learn how to use [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/) actions.
:::

###### SETTINGS

<img src={IterationMap} alt="Iteration Map" class="myResponsiveImg" width="800px"/>

> **ITERATE**: <u>data</u>
>> [**variable**: `output`]<br/>
>
> **SCOPE**: <u>string</u> `loop-var`


<details open>

<summary>String/Split:  Split each value</summary>

As each line gets iterated, we can further split at every whitespace to isolate each value

###### SETTINGS

<img src={StringSplitInIteration} alt="String Split In Iteration" class="myResponsiveImg" width="800px"/>

> **string**: <u>data</u>
>> [**loop-var**: `value`] <br/>

###### OUTPUT

> **variables**: `output` <br/>

</details>

<details open>

<summary>RETURN:  Create a NEW object</summary>

Now that we have isolated the data we need, we can create a NEW object to store the data.

###### SETTINGS

<img src={ReturnInIteration} alt="Return In Iteration" class="myResponsiveImg" width="800px"/>

> **WCPU**: <u>data</u>
>> [**variable**: `output > 9`] <br/>
>
> **COMMAND**: <u>data</u>
>> [**variable**: `output > 10`]

###### OUTPUT

> **variables**: `output` <br/>

</details>
</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Both the action's output and HTTP response body are set to **variables**: `output`. There's no change that needs to be made.

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

<img src={ServerWorkflowDefaultOutput} alt="Server Workflow Default Output" class="myResponsiveImg" width="800px"/>

> **body**: <u>data</u>
>> [**variables**: `output`]

</details>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

#### 2. Test the API with Postman or CURL

<b>cURL</b>

```bash
curl --location 'localhost:1114/1-to-n-juniper-parser' \
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