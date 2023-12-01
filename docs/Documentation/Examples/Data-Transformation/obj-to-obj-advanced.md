---
sidebar_position: 2
title: Object to Object Advanced
sidebar_label: Object to Object Advanced
description: Transforming from one Object format to another
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - Object to Object
  - JSON to JSON
---

import CreateApiPath from '@site/static/img/example/data-transformation/obj-to-obj-advanced/1-create-api-path.jpg';
import CreateServer from '@site/static/img/example/data-transformation/obj-to-obj-advanced/2-create-server.jpg';
import CreateServerOperation from '@site/static/img/example/data-transformation/obj-to-obj-advanced/3-create-server-operation.jpg';
import SimulateData from '@site/static/img/example/data-transformation/obj-to-obj-advanced/4-simulate-data.jpg';
import SendPostmanRequest from '@site/static/img/example/data-transformation/obj-to-obj-advanced/5-send-postman-request.jpg';
import CreateSimulation from '@site/static/img/example/data-transformation/obj-to-obj-advanced/6-create-simulation.jpg';
import NameSimulation from '@site/static/img/example/data-transformation/obj-to-obj-advanced/7-name-simulation.jpg';
import SelectSimulation from '@site/static/img/example/data-transformation/obj-to-obj-advanced/8-select-simulation.jpg';
import AddIterationMap from '@site/static/img/example/data-transformation/obj-to-obj-advanced/9-add-iteration-map-action.jpg';
import AddVariableSet from '@site/static/img/example/data-transformation/obj-to-obj-advanced/10-add-variable-set-action.jpg';
import CheckIterationMapOutput from '@site/static/img/example/data-transformation/obj-to-obj-advanced/11-check-iteration-map-action-output.jpg';
import HttpResponse from '@site/static/img/example/data-transformation/obj-to-obj-advanced/12-http-response.jpg';
import PostmanFinal from '@site/static/img/example/data-transformation/obj-to-obj-advanced/13-postman-final.jpg';

# Object to Object Advanced

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Create a <a href="/docs/Documentation/Guide/Server/">Server</a> that receives data in a JSON format and respond in another JSON format.</p>
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

### Step 1: Create an API endpoint

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/json-to-json-advanced`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation
:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<img src={CreateServer} alt="CreateServer" class="myResponsiveImg" width="500px"/>


- Server ID: `data-transformation-server`
- Port Number: `8080`  Feel free to select your own port number
- Linked API: data-transformation-api  (select the API you created above)

#### Create a Server Operation

<img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/>

- Press the "Add API Operation"
- Select the API endpoint created above

### Step 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

<img src={SimulateData} alt="Simulate Data" class="myResponsiveImg" width="750px"/>

We will use the "real data" to create the test simulation.

#### 1. Send a HTTP request from Postman or CURL

<img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/>

#### 2. Create a Test Simulation from the Received Data

API Autoflow captures the data received and it can be used to create data simulation.

<img src={CreateSimulation} alt="Create Simulation" class="myResponsiveImg" width="450px"/>

#### 3. Name the Simulation

<img src={NameSimulation} alt="Name Simulation" class="myResponsiveImg" width="400px"/>


#### 4. Select "real-data" Simulation

<img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/>


## Add Action to the Flow

You can add actions to transform the data.

### Step 5 : Add an action

#### 1. Add Interation Map Action

<img src={AddIterationMap} alt="Add Iteration Map" class="myResponsiveImg" width="800px"/>

- Iterate over the data received in the **request** `body`.  Note that we are now working with the test simulation created with the data received from HTTP request.
- Set the Iteration Map's **SCOPE** as `users`. 

:::info
The scope in the iteration only exists inside the iteration.  It is used to store `key` and `value` for each item as it loops through the array.
:::

#### 2. Add Variable Set Action

We are creating a new object with the variable **request**: `value > data > field1` and  `value > data > field2`.

:::danger
- Note that we need to select the "first_name" and "last_name" from the iteration's scope **users** `value`. (NOT request: body)
::: 

<img src={AddVariableSet} alt="Add Variable Set" class="myResponsiveImg" width="800px"/>

Check the action output.

#### 3. Check the OUTPUT of Iteration Map

<img src={CheckIterationMapOutput} alt="Check Iteration Map Output" class="myResponsiveImg" width="700px"/>

The output of the array should have array of NEW objects.


### Step 6 : Create a NEW JSON in the HTTP response

#### 1. Map HTTP response

We will create a NEW JSON object directly in the HTTP response body.

- Create a NEW object with the key `users`

<img src={HttpResponse} alt="HttpResponseCapitalized" class="myResponsiveImg" width="700px"/>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

#### 2. Test the API with Postman or CURL

<img src={PostmanFinal} alt="Postman Final" class="myResponsiveImg" width="800px"/>