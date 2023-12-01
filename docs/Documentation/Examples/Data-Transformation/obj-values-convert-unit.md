---
title: Object Value Convert Unit
sidebar_label: Object Convert Unit
description: Converting units from one type to another (ex. mbps to kbps and vice versa)
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - object
  - convert unit
---

# Object Value Convert Unit

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Converting units from one type to another (ex. Mbps to Kbps and vice versa).</p>
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
| Action <br/>[math/calculate](../../../Documentation/actions-library/data/math/action-math-calculate/)    | Calculate mathematical expression. |

</details>


## Detail

The HTTP request has an input:

**Test case 1**

```json
{
    "speed" : 1000000,
    "unit" : "kbps"
}
```

**Test case 2**

```json
{
    "speed" : 1000,
    "unit" : "mbps"
}
```

The goal of the operation is to merge the object into a flatter structure:

**Result 1**

```json
{
    "speed": 1000,
    "unit": "mbps"
}
```

**Result 2**

```json
{
    "speed": 1000000,
    "unit": "kbps"
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

- Path: `/obj-values-convert-unit
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


<b>cURL for Test Case 1</b>

```bash
curl --location 'localhost:1114/obj-values-convert-unit' \
--header 'Content-Type: application/json' \
--data '{
    "speed" : 1000000,
    "unit" : "kbps"
}'
```

<b>cURL for Test Case 2</b>

```bash
curl --location 'localhost:1114/obj-values-convert-unit' \
--header 'Content-Type: application/json' \
--data '{
    "speed" : 1000,
    "unit" : "mbps"
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

#### 1. Apply logic based on the mbps vs. kbps

The condition looks at the **request**: `body > unit` and applies case that matches.

<details open>

<summary>Condition Switch</summary>

###### SETTINGS

> **SWITCH**: <u>data</u>
>> **request**: `body > unit`

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->



##### Case 1:  If the unit is `kbps`


<details open>

<summary>Math Calculate</summary>

Create two variables `input` and `unit`.  In the expression, divide the two variables.

###### SETTINGS

> **expression**: <u>string</u> `input / unit` <br/>
> **variables**: <u>object</u>
>> **input**: <u>data</u> **variables**: `body > speed` <br/>
>> **unit**: <u>number</u> `1000` <br/>
<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

###### OUTPUT

> **variables**: `output` <br/>

</details>

<details open>

<summary>Return</summary>

Create a NEW object in the final format.

###### SETTINGS

> **speed**: <u>data</u>
>> **variables**: `body > speed`
>
> **unit**: <u>string</u> `mbps` <br/>
<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>

##### Case 2:  If the unit is `mbps`

<details open>

<summary>Math Calculate</summary>

Create two variables `input` and `unit`.  In the expression, this time we are multiplying the two variables.

###### SETTINGS

> **expression**: <u>string</u> `input * unit` <br/>
>> **input**: <u>data</u> **variables**: `body > speed` <br/>
>> **unit**: <u>number</u> `1000` <br/>

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

###### OUTPUT

> **variables**: `output` <br/>

</details>

<details open>

<summary>Return</summary>

Create a NEW object in the final format.

###### SETTINGS

> **speed**: <u>data</u>
>> **variables**: `body > speed`
>
> **unit**: <u>string</u> `kbps` <br/>
<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>


##### DEFAULT

Return a string value of `Invalid data type`


###### OUTPUT

> **variables**: `output`

</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Both the action's output and HTTP response body are set to **variables**: `output`. There's no change that needs to be made.

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

> **body**: <u>data</u> <br/>**variables**: `output`

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

</details>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

#### 2. Test the API with Postman or CURL

<b>cURL for Test Case 1</b>

```bash
curl --location 'localhost:1114/obj-values-convert-unit' \
--header 'Content-Type: application/json' \
--data '{
    "speed" : 1000000,
    "unit" : "kbps"
}'
```

<b>cURL for Test Case 2</b>

```bash
curl --location 'localhost:1114/obj-values-convert-unit' \
--header 'Content-Type: application/json' \
--data '{
    "speed" : 1000,
    "unit" : "mbps"
}'
```