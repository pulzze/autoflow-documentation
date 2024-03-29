---
title: Split Object 
sidebar_label: Object Split
description: Split multiple objects by adding higher level keys.
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - Object split
---

import CreateApi from '@site/static/img/example/data-transformation/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/obj-split/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/obj-split/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/obj-split/simulation.jpg';
import CreateServer from '@site/static/img/example/data-transformation/create-server.jpg';
import HttpOutput from '@site/static/img/example/data-transformation/obj-split/http-output.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';

# Split Object 

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received data in an object and add NEW key to each value.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
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

## Detail

The HTTP request has an input:

```json
{
    "fieldA": "valueA",
    "fieldB": "fieldB"
}
```

The goal of the operation is to split the object and add new key:

```json
{
    "ChildA": {
        "fieldA": "valueA"
    },
    "ChildB": {
        "fieldB": "fieldB"
    }
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

- Path: `/obj-split`
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
curl --location 'localhost:1114/obj-split' \
--header 'Content-Type: application/json' \
--data '{
    "fieldA": "valueA",
    "fieldB": "fieldB"
}'
```

</details>

<details open>

<summary>2. Check the data is received by the server endpoint</summary>

API Autoflow captures the data received and it can be used to create data simulation.

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="900px"/>

</details>

### Action(s)

No action is needed for this use case

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Since we need to respond in a JSON object, we can create a new object in the HTTP response.

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

<img src={HttpOutput} alt="HTTP Output" class="myResponsiveImg" width="800px"/>

> **body**: <u>object</u>
>> **ChildA**: <u>object</u>
>>> **filedA**: <u>data</u><br/>**request**: `body > fieldA`
>>
>> **ChildB**: <u>object</u>
>>> **filedB**: <u>data</u><br/>**request**: `body > fieldB`

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
curl --location 'localhost:1114/obj-split' \
--header 'Content-Type: application/json' \
--data '{
    "fieldA": "valueA",
    "fieldB": "fieldB"
}'
```