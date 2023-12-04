---
title: Binary decimal to bit flag
sidebar_label: Binary decimal to bit flag
description: Binary 1101 represent 4 flags A, B, C, D where if the bit is set, then flag is True
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - binary
  - bits to flag
---

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import IntegrationBitToFlag from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/integration-bit-to-flag.jpg';
import VariableSetFlagTable from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/variable-set-flag-table.jpg';
import VariableSetFinalTable from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/variable-set-final-table.jpg';
import IterationMap from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/iteration-map.jpg';
import ObjectPut from '@site/static/img/example/data-transformation/binary-dec-to-bit-flag/object-put.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Binary Decimal to Bit Flag

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Receive flag in decimal and convert binary flag</p>
          <p>For example</p>
          <p>Binary 1101 represent 4 flags A, B, C, D where if the bit is set, then flag is True</p>
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
| Action <br/> data/binary-to-flag    | Converts the given datetime to unix time.  |
| Action <br/>[variable/set](../../../Documentation/actions-library/data/variable/action-variable-set/)    | This Action set variable.  |
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[object/put](../../../Documentation/actions-library/data/object/action-object-put/)    | This action returns new object which puts the given 'value' under 'key' in 'object'  |

</details>


## Detail

The HTTP request has an input:
```json
{
    "flag" : 13
}
```

The goal of the operation is to convert the decimal into a :

```json
{
    "flagA": true,
    "flagB": true,
    "flagC": false,
    "flagD": true
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

- Path: `/binary-dec-to-bit-flag`
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
curl --location 'localhost:1114/bit-to-flag' \
--header 'Content-Type: application/json' \
--data '{
    "flag" : 13
}'
```

</details>

<details open>

<summary>2. Create a Test Simulation from the Received Data</summary>

API Autoflow captures the data received and it can be used to create data simulation.

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="900px"/>

</details>

<details open>

<summary>3. Name the Simulation</summary>

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

</details>

<details open>

<summary>4. Select "real-data" Simulation</summary>

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

</details>


### Action(s)

:::tip Required Concepts
Learn how to create a [Actions](../../../Documentation/Guide/Workflow/Action/). 
:::

You can add actions to transform the data.

#### 1. Converts decimal to binary

<details open>

<summary>Decimal to Binary Action</summary>

Binary action coverts the **decimal** into either **enum** or **boolean**

<img src={IntegrationBitToFlag} alt="Integration Bit To Flag" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **integer**: <u>data</u>
>> [**request**: `body > flag`]
>
> **size**: <u>number</u>
>> `0`
>
> **mode**: <u>enum</u>
>> `boolean`

###### OUTPUT

> **variables**: `binary` <br/>

</details>



#### 2. Create a list of flag names 

<details open>

<summary>Variable Set Action</summary>

Since flag names need to be customizable, we can create a new array with flag names.

<img src={VariableSetFlagTable} alt="Variable Set Flag Table" class="myResponsiveImg" width="900px"/>


###### SETTINGS

> **value**: <u>array</u>
>> <u>string</u> <br/>
>> <code>flagA </code> <br/>
>> <u>string</u> <br/>
>> <code>flagB </code> <br/>
>> <u>string</u> <br/>
>> <code>flagC </code> <br/>
>> <u>string</u> <br/>
>> <code>flagD </code> <br/>

###### OUTPUT

> **variables**: `flag-names` <br/>

</details>

#### 3. Create an empty object to store the final data

<details open>

<summary>Variable Set Action</summary>

As we iterate over the binary, we need an empty object to start putting the new value.

<img src={VariableSetFinalTable} alt="Variable Set Final Table" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **value**: <u>object</u>

###### OUTPUT

> **variables**: `output` <br/>

</details>


#### 4. Iterate over the binary

:::tip Required Concepts
Learn how to create a [iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/). 
:::

<details open>

<summary>Iteration Map Action</summary>

<img src={IterationMap} alt="Iteration Map" class="myResponsiveImg" width="900px"/>

> **Iterable**: <u>data</u> **variable**: `binary` <br/>
> **SCOPE**: <u>string</u> `loop-var`

We will iterate over the array created with the binary in step 1. 

##### Put New value in the empty object

<details open>

<summary>Object/Put</summary>

As we iterate over the array of binary, we can create a new key:value and insert it in the empty array created in step 3.

<img src={ObjectPut} alt="Object Put" class="myResponsiveImg" width="900px"/>


###### SETTINGS

> **object**: `data` <br/>
>> [**variables**: `output`]
>
> **key**: `data` <br/>
>> [**variables**: `flag-name > Scope::(loop-var: index)`]
>
>> **value**: `data` <br/>
>> [**loop-var**: `value`]
>

###### OUTPUT

> **variables**: `output` <br/>

:::tip  Dynamic referencing
Notice the data referencing for the key is again referencing **loop-var**: index.  It is common to reference other data within the reference.

For example,
- As the iteration loops over the array `flag-names`, it will generate index numbers starting from `0`.
- We are simply inserting the index number as part of the **key**'s reference.
- For the first loop where the index is `0`, The key's reference would be **variables**: `flag-names > 0`, which is `flagA`
:::

</details>

</details>

### OUTPUT: HTTP Response

#### 1. Create a NEW object and map the IP and Subnet

Both the action's output and HTTP response body are set to **variables**: `output`. There's no change that needs to be made.

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

<b>cURL</b>

```bash
curl --location 'localhost:1114/bit-to-flag' \
--header 'Content-Type: application/json' \
--data '{
    "flag" : 13
}'
```