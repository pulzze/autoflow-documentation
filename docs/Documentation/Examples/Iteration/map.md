---
sidebar_position: 1
title: Iteration Map
sidebar_label: Map
description: Iteration map examples
image: img/api-autoflow-logo.png
keywords:
  - iteration
  - Map
  - action
  - example
---

# Iteration Map Example

import CreateApi from '@site/static/img/example/iteration/create-api.jpg';
import CreateApiPath from '@site/static/img/example/iteration/map/create-api-path.jpg';
import Postman from '@site/static/img/example/iteration/map/postman.jpg';
import Simulation from '@site/static/img/example/iteration/map/simulation.jpg';
import CreateServer from '@site/static/img/example/iteration/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import IterationMap from '@site/static/img/example/iteration/map/iteration-map.jpg';
import StringUpcase from '@site/static/img/example/iteration/map/string-upcase.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Conditional SWITCH Example

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Iterate over an <b>array</b> of <b>strings</b>.</p>
          <p>Then, upcase each letter using <b>string/upcase</b> action</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-iteration-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
    </div>
    <div class="colTwoClearer"></div>
</div>

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
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[string/upcase](../../../Documentation/actions-library/data/string/action-string-upcase/)    | Returns a string where converts all characters in the given string to uppercase.    |

</details>

## Details

The HTTP request body has an array with 2 values:

#### Original array

```yaml
[ "foo1", "foo2" ]
```

The goal of the operation is to iterate over the array and create a new array:

#### New array (after iteration)

```yaml
[ "FOO1", "FOO2" ]
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

- ID: `sample-iteration`

</details>

<details open>

<summary>Create an API Path</summary>

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/map`
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

- Server ID: `sample-iteration`
- Port Number: `1112`  Feel free to select your own port number
- Linked API: `sample-iteration`  (select the API you created above)

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

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-f255076a-da4f-4635-a1f9-2b27ccf20c66?ctx=documentation)

###### cURL
```bash
curl --location 'localhost:1112/map' \
--header 'Content-Type: application/json' \
--data '[
    "foo1",
    "foo2"
]'
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

#### 1. Iterate over the input array.

:::tip Required Concepts
Learn how to create a [Iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/). 
:::

<details open>

<summary>Iteration Map</summary>

<img src={IterationMap} alt="Iteration Map" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **Iteration**: <u>data</u>
>> [<b>request</b>: <code>body</code>]
>
> **Scope**: <u>string</u>
>> <code>loop-var</code>

:::tip Iteration Scope
Scope `loop-var` stores each value from the array.
  - Makes the value available inside the iteration one-by-one. The 1st value is available to be used for configuration.
:::

##### Upcase the Value

<details open>

<summary>String Upcase</summary>

<img src={StringUpcase} alt="String Upcase" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **string**: <u>data</u>
>> [**request**: `body > value`]

###### OUTPUT

> **variables**: `output` <br/>

</details>

###### OUTPUT

> **variables**: `output` <br/>

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

###### cURL

```bash
curl --location 'localhost:1112/map' \
--header 'Content-Type: application/json' \
--data '[
    "foo1",
    "foo2"
]'
```