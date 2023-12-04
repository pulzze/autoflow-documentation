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

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/1-to-n/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/1-to-n/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/1-to-n/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import StringSplitByNewLine from '@site/static/img/example/data-transformation/1-to-n/string-split-by-new-line.jpg';
import IterationMap from '@site/static/img/example/data-transformation/1-to-n/iteration-map.jpg';
import StringSplitBy from '@site/static/img/example/data-transformation/1-to-n/string-split-by-in-iteration.jpg';
import IterationReturn from '@site/static/img/example/data-transformation/1-to-n/return-in-iteration.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

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

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Documentation/Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Documentation/Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

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

- Path: `/1-to-n`
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
curl --location 'localhost:1114/1-to-n' \
--header 'Content-Type: application/json' \
--data '{
  "data": "%ASA-6-302013: TCP connection 933 OUTSIDE:172.217.169.68\n%ASA-6-302013: TCP connection 935 OUTSIDE:23.40.43.75"
}'
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

#### 1. Configure string/split-by-newline action

The first big cut you are going to make is isolating the table.
We can use **String/split-by** action to split with the table header `PID USERNAME    THR PRI NICE   SIZE    RES STATE    TIME   WCPU COMMAND`.

<details open>

<summary>String Split By New Line</summary>

:::tip Required Concepts
Learn how to create a [string/split-by-newline](../../../Documentation/actions-library/data/string/action-string-split-by-newline/) . 
:::

<img src={StringSplitByNewLine} alt="String Split By New Line" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **string**: <u>data</u>
>> [**input**: `syslog`]

###### OUTPUT

> **variables**: `output` <br/>

</details>

#### 2 : Iteration over each line and extract the values

<details open>

<summary>Iteration Map</summary>

:::tip Required Concepts
Learn how to create a [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/) . 
:::

###### SETTINGS

<img src={IterationMap} alt="Iteration Map" class="myResponsiveImg" width="900px"/>

> **ITERATION**: <u>data</u>
>> [**variables**: `output`]
>
> **SCOPE**: <u>string</u> 
>> <code>loop-var</code>

:::note
You can not access iteration scope `loop-var` outside the iteration.
:::

<details open>

<summary>String Split By</summary>

:::tip Required Concepts
Learn how to use [string/split-by](../../../Documentation/actions-library/data/string/action-string-split-by/) actions.
:::

Similar to how the earlier [string/split-by-newline](../../../Documentation/actions-library/data/string/action-string-split-by-newline/) action to split the string on a new line;

<pre>
%ASA-6-302013: TCP <b>connection </b>933 <b>OUTSIDE:</b>172.217.169.68
</pre>

An action [string/split-by](Documentation/actions-library/data/string/action-string-split-by.mdx) will be used to further split the string based on patterns to isolate the values.


<img src={StringSplitBy} alt="String Split By Action" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **string**: <u>data</u>
>> [**loop-var**: `value`]
>
> **patterns**: <u>array</u>
>> <u>string</u> <code>OUTSIDE:</code><br/>
>> <u>string</u> <code>connection</code>

###### OUTPUT

> **variables**: `output` <br/>

</details>

<details open>

<summary>Return</summary>

<img src={IterationReturn} alt="Action Return" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **ip**: <u>data</u>
>> [**variables**: `output > 2`]
>
> **connection**: <u>data</u>
>> [**variables**: `output > 1`]

###### OUTPUT

> **variables**: `output` <br/>

</details>

###### ITERATION OUTPUT

> **variables**: `output` <br/>


</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Both the action's output and HTTP response body are set to **variables**: `output`. There's no change that needs to be made.

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

<img src={ServerWorkflowDefaultOutput} alt="Server Workflow Default Output" class="myResponsiveImg" width="900px"/>

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
curl --location 'localhost:1114/1-to-n' \
--header 'Content-Type: application/json' \
--data '{
  "data": "%ASA-6-302013: TCP connection 933 OUTSIDE:172.217.169.68\n%ASA-6-302013: TCP connection 935 OUTSIDE:23.40.43.75"
}'
```