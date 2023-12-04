---
title: Insert property to an object
sidebar_label: Object property insert
description: Add a static property to an object.
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - object
  - property
  - insert
---

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/obj-propty-insert/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/obj-propty-insert/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/obj-propty-insert/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import ObjectPutIn from '@site/static/img/example/data-transformation/obj-propty-insert/object-put-in.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Insert Property to an Object

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received data in an object and insert new value.</p>
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
| Action <br/>[object/put-in](../../../Documentation/actions-library/data/object/action-object-put-in/)    | Returns new object which puts the given 'value' under 'path' in 'object'.    |

</details>


## Detail

The HTTP request has an input:

```json
{
    "fieldA" : 2
}
```

The goal of the operation is to merge the object into a flatter structure:

```json
{
    "fieldA": 2,
    "name": "MODELA"
}
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

- Path: `/obj-propty-insert`
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

<summary>1. Send a HTTP request from Postman or CURL</summary>

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1114/obj-propty-insert' \
--header 'Content-Type: application/json' \
--data '{
    "fieldA" : 2
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

#### 1. Insert value in the object

Insert value `MODELA` with the key `name` in the object **request**: `body`.

<details open>

<summary>Object Put In</summary>

###### SETTINGS

<img src={ObjectPutIn} alt="Object Put In" class="myResponsiveImg" width="900px"/>

> **object**: <u>data</u>
>> **request**: `body`
>
> **path**: <u>array</u> <br/>
>> <u>string</u> <code>name</code>
>
> **value**: <u>string</u> <br/>
>> `MODELA`

###### OUTPUT

> **variables**: `output`

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

#### 2. Test the API with Postman or cURL

###### cURL

```bash
curl --location 'localhost:1114/obj-propty-insert' \
--header 'Content-Type: application/json' \
--data '{
    "fieldA" : 2
}'
```