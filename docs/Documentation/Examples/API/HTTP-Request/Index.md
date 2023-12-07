---
sidebar_position: 3
title: HTTP Request
sidebar_label: API Call
description: HTTP Request Action
image: img/api-autoflow-logo.png
keywords:
  - http request
  - action
---

# HTTP Request Action (API Call)

import CreateApi from '@site/static/img/example/api/create-api.jpg';
import CreateApiPath from '@site/static/img/example/api/api-call/create-api-path.jpg';
import Postman from '@site/static/img/example/api/api-call/postman.jpg';
import Simulation from '@site/static/img/example/api/api-call/simulation.jpg';
import CreateServer from '@site/static/img/example/api/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import HttpRequest from '@site/static/img/example/api/api-call/http-request.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Make API CALL to Postman Echo API and get data.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-api-config.json" download><button class="btnDownload">⏬ Download</button></a>
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
| [API](../../../Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Guide/Workflow/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[http/request](../../../../Documentation/actions-library/call/http/action-http-request/) | This Action returns results base on http/request.    |

</details>

## Detail

Make API CAll to postman echo and get data.

API: `https://postman-echo.com/get`

## Content

### INPUT: HTTP Request

#### 1: Create an API endpoint

:::note Required Concepts
Learn how to create an [API](../../../Examples/API/#1-create-api). 
:::

<details open>

<summary>Create an API</summary>

From the **left navigation**, go to the API section and create a new API.

<img src={CreateApi} alt="Create API" class="myResponsiveImg" width="500px"/>

- ID: `sample-api`

</details>

<details open>

<summary>Create an API Path</summary>

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/api-call`
- Method: <span class="method post">POST</span>

</details>

#### 2. Create a Server Operation

:::tip Required Concepts
Learn how to create a [Server](../../../Examples/API/#2-create-server). 
:::

<details open>

<summary>Create a Server</summary>

From the **left navigation**, go to the Server section and create a new Server.

<img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/>

- Server ID: `sample-api`
- Port Number: `1114`  Feel free to select your own port number
- Linked API: `sample-api`  (select the API you created above)

</details>

<details open>

<summary>Create a Server Operation</summary>

<img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="900px"/>

- Press the "Add API Operation"
- Select the API endpoint created above


</details>

#### 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Guide/Workflow/INPUT-Simulation/). 
:::

We will use the "real data" to create the test simulation.

<details open>

<summary>1. Send a HTTP request from Postman or cURL</summary>

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-8f70c174-327d-492e-b096-0c8223bb73fe?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1111/api-call'
```

</details>

<details open>

<summary>2. Check the data is received by the server endpoint</summary>

API Autoflow captures the data received and it can be used to create data simulation.

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="900px"/>

</details>


### Action(s)

:::tip Required Concepts
Learn how to create a [Actions](../../../Guide/Workflow/Action/). 
:::

Add actions to transform the data.

#### 1. Configure string/split-by-newline action

<details open>

<summary>HTTP Request</summary>

:::tip Required Concepts
Learn how to create a [http/request](../../../../Documentation/actions-library/call/http/action-http-request/) . 
:::

<img src={HttpRequest} alt="HTTP Request" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **url**: <u>string</u> `{protocol}://{host}:{port}/get`
>
> **variables**: <u>object</u>
>> **host**: <u>string</u>  `postman-echo.com` <br/>
>> **port**: <u>string</u>  `443` <br/>
>> **protocol**: <u>string</u>  `https` <br/>
>
> **method**: <u>enum</u> `get`
>
> **query**: <u>object</u>
>> **foo1**: <u>string</u>  `bar1` <br/>
>> **foo2**: <u>string</u>  `bar2` <br/>
>

or you can manually input the entire address in the URL without using the variables `https://postman-echo.com/get?foo1=bar1&foo2=bar2`

###### OUTPUT

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
curl --location 'localhost:1111/api-call'
```