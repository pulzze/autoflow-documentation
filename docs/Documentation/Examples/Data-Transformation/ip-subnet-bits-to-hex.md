---
title: IP subnet bits to hex
sidebar_label: IP subnet bits to hex
description: Convert IP address and subnet mask notation (ex. 7.7.7.0/24 to Convert 7.7.7.0 mask FF.FF.FF.00)
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - ip
  - subnet
  - bits to hex
---

import CreateApi from '@site/static/img/example/data-transformation/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/simulation.jpg';
import CreateServer from '@site/static/img/example/data-transformation/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import StringSplitBy from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/string-split-by.jpg';
import VariableSet from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/variable-set.jpg';
import ObjectGet from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/object-get.jpg';
import HttpOutput from '@site/static/img/example/data-transformation/ip-subnet-bits-to-hex/http-output.jpg';

# IP Subnet Bits to Hex

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Convert IP address and subnet mask notation</p>
          <p>In this example, IP and subnet mask <code>7.7.7.0/24</code> is converted to IP <code>7.7.7.0</code> and mask <code>FF.FF.FF.00</code>.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://youtu.be/s6WmQLwb2HM"><button class="btnVideo">🎥 Watch Video</button></a>
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
| Action <br/>[string/split-by](../../../Documentation/actions-library/data/string/action-string-split/)    | Returns an array that divides a string into substrings at each Unicode whitespace occurrence with leading and trailing whitespace ignored.    |
| Action <br/>[object/get](../../../Documentation/actions-library/data/object/action-object-get/)    | Iterate over array of data mapping result to each array position.    |

</details>


## Detail


The HTTP request has an input:

```json
{
    "address" : "8.8.0.0/16"
}
```

The goal of the operation is to convert the subnet mask bits to hex:

```json
{
    "address": "8.8.0.0",
    "mask": "FF.FF.00.00"
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

- Path: `/ip-subnet-bits-to-hex`
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

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1114/ip-subnet-bits-to-hex' \
--header 'Content-Type: application/json' \
--data '{
    "address" : "8.8.0.0/16"
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

#### 1. Split the IP and Mask in character `/`

The original data `"8.8.0.0/16"` needs to be split at `/` to create an array of IP and subnet mask `["8.8.0.0","16"]`.  

<details open>

<summary>String Split</summary>

<img src={StringSplitBy} alt="String Split By" class="myResponsiveImg" width="800px"/>

###### SETTINGS

> **string**: <u>data</u> **request**: `body > address` <br/>
> **pattern**: <u>array</u> `/`

###### OUTPUT

> **variables**: `output` <br/>

</details>


#### 2. Create subnet mask bits to hex object

You can cut and paste the **Bits to Hex** object from the end of this document to the action's object.

<details open>

<summary>Variable Set Action</summary>

<img src={VariableSet} alt="Variable Set" class="myResponsiveImg" width="800px"/>

###### SETTINGS

> **value**: <u>object</u>
>> **1**: <u>string</u> `80.00.00.00` <br/>
>> **2**: <u>string</u> `C0.00.00.00` <br/> ...

###### OUTPUT

> **variables**: `bits-to-hex` <br/>

</details>

#### 3. Get the Hex value from object

From the hex object, get the hex value that corresponds to the subnet mask bit value stored in **variables**: `output > 1`.

<details open>

<summary>Object Get</summary>

<img src={ObjectGet} alt="Object Get" class="myResponsiveImg" width="800px"/>

###### SETTINGS

> **object**: <u>data</u> **variables**: `bits-to-hex`<br/>
> **key**: <u>data</u> **variables**: `output > 1`

###### OUTPUT

> **variables**: `output > 1` <br/>

</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Since we need to respond in a JSON object, we can create a new object in the HTTP response. 

- IP Address:  Getting it from the **variables**: `output > 0` that was created in the step 1 string split action
- mask: Getting it from the **variables**: `output > 1` that was modified in the step 3 object get action

<details open>

<summary>HTTP Response</summary>

<img src={HttpOutput} alt="String Capitalize" class="myResponsiveImg" width="800px"/>

###### SETTINGS

> **body**: <u>object</u>
>> **address**: <u>data</u> **variables**: `output > 0`<br/>
>> **mask**: <u>data</u> **variables**: `output > 1`

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
curl --location 'localhost:1114/ip-subnet-bits-to-hex' \
--header 'Content-Type: application/json' \
--data '{
    "address" : "8.8.0.0/16"
}'
```


**Bits to Hex table**

```json
{
  "1": "80.00.00.00",
  "2": "C0.00.00.00",
  "3": "E0.00.00.00",
  "4": "F0.00.00.00",
  "5": "F8.00.00.00",
  "6": "FC.00.00.00",
  "7": "FE.00.00.00",
  "8": "FF.00.00.00",
  "9": "FF.80.00.00",
  "10": "FF.C0.00.00",
  "11": "FF.E0.00.00",
  "12": "FF.F0.00.00",
  "13": "FF.F8.00.00",
  "14": "FF.FC.00.00",
  "15": "FF.FE.00.00",
  "16": "FF.FF.00.00",
  "17": "FF.FF.80.00",
  "18": "FF.FF.C0.00",
  "19": "FF.FF.E0.00",
  "20": "FF.FF.F0.00",
  "21": "FF.FF.F8.00",
  "22": "FF.FF.FC.00",
  "23": "FF.FF.FE.00",
  "24": "FF.FF.FF.00",
  "25": "FF.FF.FF.80",
  "26": "FF.FF.FF.C0",
  "27": "FF.FF.FF.E0",
  "28": "FF.FF.FF.F0",
  "29": "FF.FF.FF.F8",
  "30": "FF.FF.FF.FC",
  "31": "FF.FF.FF.FE",
  "32": "FF.FF.FF.FF"
}
```