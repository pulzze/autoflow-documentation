---
title: Publish data to Kakfa Broker
sidebar_label: Publish
description: Kafka Publish
image: img/api-autoflow-logo.png
keywords:
  - kafka
  - client
  - publish
---

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/client/kafka/publish/create-api-path.jpg';
import Postman from '@site/static/img/example/client/kafka/publish/postman.jpg';
import Simulation from '@site/static/img/example/client/kafka/publish/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import JsonEncode from '@site/static/img/example/client/kafka/publish/json-encode.jpg';
import KafkaPublish from '@site/static/img/example/client/kafka/publish/kafka-publish.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Publish data to Kakfa Broker

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Create a <a href="/docs/Documentation/Guide/Server/">Server</a> that receives data in a object format and respond in another JSON format.</p>
          <p>In the below example, a new object is created by extracting the values from the original JSON object.</p>
          <p>Publish data to an <b>Kafka</b> broker.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-client-config.json" download><button class="btnDownload">⏬ Download</button></a>
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
| Action <br/>[json/encode](../../../../Documentation/actions-library/data/data-json/action-data-json-encode)    | Provides the ability to encode data structures into JSON strings.  |
| Action <br/>[kafka/publish](../../../../Documentation/actions-library/call/kafka/action-kafka-publish)    | This Action returns array that divides a string into parts based on a pattern.    |

</details>


## Detail

### Original Object
The HTTP request has 2 inputs:
- **data**: main key that wraps the data
  - **field1**: key where the "first name" is stored
  - **field2**: key where the "last name" is stored

```js
  {
      "data": {
          "field1": "joe",
          "field2": "blow"
      }
  }
```

### New Object

The goal of the operation is to create a new object:

- **user**: main key that wraps the data
  - **first_name**: key where the "first name" is stored
  - **last_name**: key where the "last name" is stored



```js
{
    "user": {
        "first_name": "joe",
        "last_name": "blow"
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

- Path: `/kafka-publish`
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

##### 1. Send a HTTP request from Postman or CURL

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL

```bash
curl --location 'localhost:1114/kafka-publish' \
--header 'Content-Type: application/json' \
--data '{
    "data": {
        "field1": "joe",
        "field2": "blow"
    }
}'
```

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


#### 1. JSON encode (stringify) the HTTP request body

:::tip Required Concepts
[json/encode](../../../../Documentation/actions-library/data/data-json/action-data-json-encode)
:::

API Autoflow server automatically decodes the incoming JSON.  Hence we need to encode (stringfy) it back to JSON to send it over Kafka publish.

<details open>

<summary>JSON Encode</summary>

###### SETTINGS

<!-- <img src={JsonEncode} alt="String Capitalize" class="myResponsiveImg" width="900px"/> -->

> **value**:<u>object</u>
>> **first_name** <u>data</u>
>>> [<b>request</b>: <code>body > data > field1</code>]
>
>> **last_name** <u>data</u>
>>> [<b>request</b>: <code>body > data > field2</code>]

###### OUTPUT

> **variables**: `output`

</details>

#### 1. Kafka Publish

:::danger Kafka Client
[Create a Kafka Client](../kafka) before moving further. 
:::

You can create a new value and publish to Kakfa broker

<details open>

<summary>Variable Set Action</summary>

###### SETTINGS

<!-- <img src={KafkaPublish} alt="String Capitalize" class="myResponsiveImg" width="900px"/> -->

> **processReference**: <u>ClientReference</u>
>> `consumer-group-id-1`
>
> **key**: <u>string</u> `hello`
>
> **value**:<u>data</u>
>> **variables** <u>output</u>
>
> **header**: <u>object</u>
>> **test** <u>string</u> `test_header`
>
> **produce_api_version**: <u>number</u> `3`
>
> **required_acks**: <u>undefined</u>
>
> **topic**: <u>string</u>
>> `topic1`

###### OUTPUT

> **variables**: `output`

</details>


### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

We are simply giving back the response from the Kafka publish action.

Since we need to respond in a JSON object, we can create a new object in the HTTP response. 

- address:  Getting it from the last actions' the **variables**: `output`

<details open>

<summary>HTTP Response</summary>

###### SETTINGS

<img src={ServerWorkflowDefaultOutput} alt="Server Workflow Default Output" class="myResponsiveImg" width="800px"/>

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

###### cURL

```bash
curl --location 'localhost:1114/kafka-publish' \
--header 'Content-Type: application/json' \
--data '{
    "data": {
        "field1": "joe",
        "field2": "blow"
    }
}'
```