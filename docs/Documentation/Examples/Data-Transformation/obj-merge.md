---
title: Merge Object
sidebar_label: Object Merge
description: Merge multiple objects by removing the higher level key. Flatten object.
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - merge object
  - flatten
---

# Merge Object

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received data in a nested object and merge into a flatter structure.</p>
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
| Action <br/>[object/merge](../../../Documentation/actions-library/data/object/action-object-merge/)    | Returns new object which Merges two 'object' into one.    |

</details>

## Detail

The HTTP request has an input:

```json
{
        "ChildA": {
            "fieldA": "valueA"
        },
        "ChildB": {
            "fieldB": "valueB"
        }
}
```

The goal of the operation is to merge the object into a flatter structure:

```json
{
    "fieldA": "valueA",
    "fieldB": "valueB"
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

- Path: `/obj-merge
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
curl --location 'localhost:1114/obj-merge' \
--header 'Content-Type: application/json' \
--data '{
        "ChildA": {
            "fieldA": "valueA"
        },
        "ChildB": {
            "fieldB": "valueB"
        }
    }
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

#### 1. Merge the object

You can cut and paste the **Bits to Hex** object from the end of this document to the action's object.

<details open>

<summary>Variable Set Action</summary>

###### SETTINGS

> **object**: <u>data</u>
>> **request**: `body > ChildA`
>
> **with**: <u>data</u> <br/>
>> **request**: `body > ChildB`

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

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

<b>cURL</b>

```bash
curl --location 'localhost:1114/obj-merge' \
--header 'Content-Type: application/json' \
--data '{
        "ChildA": {
            "fieldA": "valueA"
        },
        "ChildB": {
            "fieldB": "valueB"
        }
    }
}'
```