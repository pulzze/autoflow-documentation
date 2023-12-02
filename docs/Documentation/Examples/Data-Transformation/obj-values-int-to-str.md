---
title: Object values number to string
sidebar_label: Object values number to string
description: Convert number to enum string (ex. Assume enum strings of [“typeA”, “typeB”, “typeC”], then a value of 2 would be converted to enum string “typeC”)
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - object
  - number to string
  - integer to string
---

import CreateApi from '@site/static/img/example/data-transformation/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/obj-values-int-to-str/create-api-path.jpg';
import CreateServer from '@site/static/img/example/data-transformation/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/data-transformation/server-add-api-operation.jpg';
import ConditionSwitch from '@site/static/img/example/data-transformation/obj-values-int-to-str/condition-switch.jpg';
import Case0 from '@site/static/img/example/data-transformation/obj-values-int-to-str/case-0.jpg';
import Case1 from '@site/static/img/example/data-transformation/obj-values-int-to-str/case-1.jpg';
import Case2 from '@site/static/img/example/data-transformation/obj-values-int-to-str/case-2.jpg';
import Default from '@site/static/img/example/data-transformation/obj-values-int-to-str/default.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/data-transformation/server-workflow-default-output.jpg';

# Object values number to string

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Receive data in a JSON object.  Convert the key and value based on what's in the value.</p> 
          <p>For example.<br/> 
          A value of number <code>2</code> looks for the value in the corresponding position in the array <code>[“typeA”, “typeB”, “typeC”]</code>, then a value of 2 would be converted to enum string “typeC”</p> 
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
| Action <br/>[conditional/SWITCH](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/)    | Returns values that fits the condition. |

</details>


## Detail

The HTTP request has an input:

```json
{
    "typeValue" : 2
}
```

The goal of the operation is to merge the object into a flatter structure:

```json
{
    "typeString": "typeC"
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

- Path: `/obj-values-int-to-str`
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

<!-- <img src={SimulateData} alt="Simulate Data" class="myResponsiveImg" width="750px"/> -->

We will use the "real data" to create the test simulation.

<details open>

<summary>1. Send a HTTP request from Postman or CURL</summary>


<b>cURL</b>

```bash
curl --location 'localhost:1114/obj-values-int-to-str' \
--header 'Content-Type: application/json' \
--data '{
    "typeValue" : 2
}'
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

#### 1. Apply logic based on the value of an object

The condition looks at the **request**: `body > typeValue` and applies case that matches.

<details open>

<summary>Condition Switch</summary>

###### SETTINGS

<img src={ConditionSwitch} alt="Condition Switch" class="myResponsiveImg" width="900px"/>

> **SWITCH**: <u>data</u> [**request**: `body > typeValue`]

##### Case 1:  If the value is `0`

<details open>

<summary>Return</summary>

Create a NEW object in the final format.

###### SETTINGS

<img src={Case0} alt="Case 0" class="myResponsiveImg" width="900px"/>

> **typeString**: <u>string</u> `typeA`

</details>

##### Case 2:  If the value is `1`

<details open>

<summary>Return</summary>

Create a NEW object in the final format.

###### SETTINGS

<img src={Case1} alt="Case 1" class="myResponsiveImg" width="900px"/>

> **typeString**: <u>string</u> `typeB`

</details>


##### Case 3:  If the value is `2`

<details open>

<summary>Return</summary>

Create a NEW object in the final format.

###### SETTINGS

<img src={Case2} alt="Case 2" class="myResponsiveImg" width="900px"/>

> **typeString**: <u>string</u> `typeC`

</details>

##### DEFAULT

<img src={Default} alt="Default" class="myResponsiveImg" width="900px"/>

Return a string value of `Invalid Input`


###### OUTPUT

> [**variables**: `output`]

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
curl --location 'localhost:1114/obj-values-int-to-str' \
--header 'Content-Type: application/json' \
--data '{
    "typeValue" : 2
}'
```