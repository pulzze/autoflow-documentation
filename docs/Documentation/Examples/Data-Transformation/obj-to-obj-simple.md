---
sidebar_position: 1
title: Object to Object Simple
sidebar_label: Object to Object Simple
description: Transforming from one Object format to another
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - Object to Object
  - JSON to JSON
---


import CreateApiPath from '@site/static/img/example/data-transformation/obj-to-obj-simple/1-create-api-path.jpg';
import CreateServer from '@site/static/img/example/data-transformation/obj-to-obj-simple/2-create-server.jpg';
import CreateServerOperation from '@site/static/img/example/data-transformation/obj-to-obj-simple/3-create-server-operation.jpg';
import SimulateData from '@site/static/img/example/data-transformation/obj-to-obj-simple/4-simulate-data.jpg';
import SendPostmanRequest from '@site/static/img/example/data-transformation/obj-to-obj-simple/5-send-postman-request.jpg';
import CreateSimulation from '@site/static/img/example/data-transformation/obj-to-obj-simple/6-create-simulation.jpg';
import NameSimulation from '@site/static/img/example/data-transformation/obj-to-obj-simple/7-name-simulation.jpg';
import SelectSimulation from '@site/static/img/example/data-transformation/obj-to-obj-simple/8-select-simulation.jpg';
import HttpResponse from '@site/static/img/example/data-transformation/obj-to-obj-simple/9-http-response.jpg';
import PostmanCheck from '@site/static/img/example/data-transformation/obj-to-obj-simple/9-1-postman-check.jpg';
import PostmanFinal from '@site/static/img/example/data-transformation/obj-to-obj-simple/13-postman-final.jpg';


# Object to Object Simple

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Create a <a href="/docs/Documentation/Guide/Server/">Server</a> that receives data in a object format and respond in another JSON format.</p>
          <p>In the below example, a new object is created by extracting the values from the original JSON object.</p>
        </div>
        <br />
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#configuration-management">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=5Dgd5Kb3-90"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>

### Original JSON

```js
{
    "data": {
        "field1": "joe",
        "field2": "blow"
    }
}
```

### New JSON

```js
{
    "user": {
        "first_name": "joe",
        "last_name": "blow"
    }
}
```

## Supporting Concepts


<details open>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Documentation/Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Documentation/Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>


## Details
The HTTP request has 2 inputs:
- **data**: main key that wraps the data
  - **field1**: key where the "first name" is stored
  - **field2**: key where the "last name" is stored

The goal of the operation is to create a new object:

- **user**: main key that wraps the data
  - **first_name**: key where the "first name" is stored
  - **last_name**: key where the "last name" is stored


## Content

### Step 1: Create an API endpoint

Go to the API section and create a new API.

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

#### Add an API Path

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/object-to-object-simple`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation

Go to the Server section and create a new Server.

:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/>

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



### Step 4 : Create a NEW Object in the HTTP response

#### 1. Map HTTP response

We will create a NEW JSON object directly in the HTTP response body.

Note that we have changed the HTTP response into a **object**

<img src={HttpResponse} alt="Http Response" class="myResponsiveImg" width="400px"/>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

#### 2. Check from Postman

<img src={PostmanCheck} alt="Postman Check" class="myResponsiveImg" width="700px"/>