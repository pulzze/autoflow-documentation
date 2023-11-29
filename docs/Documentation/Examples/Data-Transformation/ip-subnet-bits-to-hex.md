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

- ID: `sample-data-transformation`

</details>

<details open>

<summary>Create an API Path</summary>

- Path: `/ip-subnet-bits-to-hex`
- Method: <span class="method post">POST</span>

</details>

#### 2. Create a Server Operation

:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->

<details open>

<summary>Create a Server</summary>

Go to the Server section and create a new Server.

- Server ID: `sample-data-transformation`
- Port Number: `1114`  Feel free to select your own port number
- Linked API: `sample-data-transformation`  (select the API you created above)

</details>

<details open>

<summary>Create a Server Operation</summary>

<!-- <img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/> -->

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
curl --location 'localhost:1114/ip-subnet-bits-to-hex' \
--header 'Content-Type: application/json' \
--data '{
    "address" : "8.8.0.0/16"
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

#### 1. Split the IP and Mask in character `/`

The original data `"8.8.0.0/16"` needs to be split at `/` to create an array of IP and subnet mask `["8.8.0.0","16"]`.  

<details open>

<summary>String Split</summary>

###### SETTINGS

> **string**: <u>data</u> **request**: `body > address` <br/>
> **pattern**: <u>array</u> `/`

###### OUTPUT

> **variables**: `output` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>


#### 2. Create subnet mask bits to hex object

You can cut and paste the **Bits to Hex** object from the end of this document to the action's object.

<details open>

<summary>Variable Set Action</summary>

###### SETTINGS

> **value**: <u>object</u>
>> **1**: <u>string</u> `80.00.00.00` <br/>
>> **2**: <u>string</u> `C0.00.00.00` <br/> ...
<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

###### OUTPUT

> **variables**: `bits-to-hex` <br/>

</details>

#### 3. Get the Hex value from object

From the hex object, get the hex value that corresponds to the subnet mask bit value stored in **variables**: `output > 1`.

<details open>

<summary>Object Get</summary>

###### SETTINGS

> **object**: <u>data</u> **variables**: `bits-to-hex`<br/>
> **key**: <u>data</u> **variables**: `output > 1`

###### OUTPUT

> **variables**: `output > 1` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Since we need to respond in a JSON object, we can create a new object in the HTTP response. 

- IP Address:  Getting it from the **variables**: `output > 0` that was created in the step 1 string split action
- mask: Getting it from the **variables**: `output > 1` that was modified in the step 3 object get action

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

> **body**: <u>object</u>
>> **address**: <u>data</u> **variables**: `output > 0`<br/>
>> **mask**: <u>data</u> **variables**: `output > 1`

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

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