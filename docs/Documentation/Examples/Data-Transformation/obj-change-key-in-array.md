---
sidebar_position: 2
title: bject Key Change in Array 
sidebar_label: Object Key Change in Array 
description: Transforming from one Object format to another in array
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - Object to Object
  - JSON to JSON
  - array
---

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/obj-change-key-in-array/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/obj-change-key-in-array/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/obj-change-key-in-array/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import IterationMap from '@site/static/img/example/data-transformation/obj-change-key-in-array/iteration-map.jpg';
import VariablesSet from '@site/static/img/example/data-transformation/obj-change-key-in-array/variables-set.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Object Key Change in Array 

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Create a <a href="/docs/Documentation/Guide/Server/">Server</a> that receives data in array of objects format and respond in with an NEW array object format.</p>
          <p>In the below example, a new object is created by extracting the values from the original JSON object.</p>
          <p>Additionally, the first name is capitalized.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#configuration-management">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=girmyEB2GVg"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>


### Original JSON

```js
[
    {
        "data": {
            "field1": "john",
            "field2": "doe"
        }
    },
    {
        "data": {
            "field1": "joe",
            "field2": "blow"
        }
    }
]
```
### New JSON

Create a new key `users` and store the value in a new object.

```js
{
    "users": [
        {
            "user": {
                "first_name": "john",
                "last_name": "doe"
            }
        },
        {
            "user": {
                "first_name": "joe",
                "last_name": "blow"
            }
        }
    ]
}
```

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Documentation/Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Documentation/Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types   | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[variable/set](../../../Documentation/actions-library/data/variable/action-variable-set/)    | This Action set variable.    |

</details>


## Details
The HTTP request has an array of objects inputs:
- **data**: main key that wraps the data
  - **field1**: key where the "first name" is stored
  - **field2**: key where the "last name" is stored

The goal of the operation is to create an array with NEW JSON:

- **user**: main key that wraps the data
  - **first_name**: key where the "first name" is stored
  - **last_name**: key where the "last name" is stored


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

- Path: `/obj-change-key-in-array`
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


### Step 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

We will use the "real data" to create the test simulation.

#### 1. Send a HTTP request from Postman or CURL

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1114/obj-change-key-in-array' \
--header 'Content-Type: application/json' \
--data '[
  {
    "data": {
      "field1": "john",
      "field2": "doe"
    }
  },
  {
    "data": {
      "field1": "joe",
      "field2": "blow"
    }
  }
]'
```

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

#### 1 : Iteration over each value

<details open>

<summary>Iteration Map</summary>

:::tip Required Concepts
Learn how to create a [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/). 
:::

###### SETTINGS

<img src={IterationMap} alt="Iteration Map" class="myResponsiveImg" width="900px"/>

> **ITERATION**: <u>data</u>
>> [**request**: `body`]
>
> **SCOPE**: <u>string</u> 
>> <code>loop-var</code>

:::note
You can not access iteration scope `loop-var` outside the iteration.
:::

<details open>

<summary>Variable Set : Create a NEW Object</summary>

:::tip Required Concepts
Learn how to use [variable/set](../../../Documentation/actions-library/data/variable/action-variable-set/) actions.
:::

<img src={VariablesSet} alt="Add Variable Set" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **value**: <u>object</u>
>> **user**: <u>object</u>
>>> **first_name**: <u>data</u><br/>
>>>> [<b>loop-var</b>: <code>value > data > field1</code>]
>
>>> **last_name**: <u>data</u><br/>
>>>> [<b>loop-var</b>: <code>value > data > field2</code>]

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

#### cURL

```bash
curl --location 'localhost:1114/obj-change-key-in-array' \
--header 'Content-Type: application/json' \
--data '[
  {
    "data": {
      "field1": "john",
      "field2": "doe"
    }
  },
  {
    "data": {
      "field1": "joe",
      "field2": "blow"
    }
  }
]'
```