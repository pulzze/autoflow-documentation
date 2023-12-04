---
title: Object Values Convert one String to Another
sidebar_label: Object values string to string
description: Covert string values (ex. “link-down/link-up” to “DOWN/UP”)
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - object
  - string to string
  - convert
---

import CreateApi from '@site/static/img/example/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/obj-values-str-to-str/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/obj-values-str-to-str/postman.jpg';
import Simulation from '@site/static/img/example/data-transformation/obj-values-str-to-str/simulation.jpg';
import CreateServer from '@site/static/img/example/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import If1 from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-1.jpg';
import If1ObjectPutIfExist from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-1-object-put-if-exist.jpg';
import If1Else from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-1-else.jpg';
import If1ObjectElsePutIfExist from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-1-else-object-put-if-exist.jpg';
import If2 from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-2.jpg';
import If2ObjectPutIfExist from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-2-object-put-if-exist.jpg';
import If2Else from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-2-else.jpg';
import If2ElseObjectPutIfExist from '@site/static/img/example/data-transformation/obj-values-str-to-str/if-2-else-object-put-if-exist.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Object Values Convert one String to Another

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received data in an object. Covert string values</p>
          <p>For example<br/>
          “link-down/link-up” to “DOWN/UP”.</p>
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
| Action <br/>[conditional/IF](../../../Documentation/actions-library/flow/conditional/action-conditional-if/)    | Returns values that fits the condition. |
| Action <br/>[object/put-if-exist](../../../Documentation/actions-library/data/object/action-object-put-if-exist/)    | Returns new object which puts a 'value' under 'key' only if the 'key' already exists in 'object'. |

</details>


## Detail

The HTTP request has an input:

```json
{
    "linkA-state" : "link-up",
    "linkB-state" : "link-down"
}
```

The goal of the operation is to change the string value:

```json
{
    "linkA-state": "UP",
    "linkB-state": "DOWN"
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

- Path: `/obj-values-str-to-str`
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
curl --location 'localhost:1114/obj-values-str-to-str' \
--header 'Content-Type: application/json' \
--data '{
    "linkA-state" : "link-up",
    "linkB-state" : "link-down"
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

#### 1. Apply values based on the Link State A Key

<details open>

<summary>IF Condition</summary>

###### IF: `linkA-state`

The condition looks at the **request**: `body > linkA-state` and puts in the new string.

<img src={If1} alt="IF Condition" class="myResponsiveImg" width="900px"/>

> **IF**: <u>Comparison</u>
>> <u>data</u> <br/>
> [<b>request</b>: <code>body > typeValue</code>]
>
> **is equal to**: <br/>
><u>string</u> <code>link-down</code>

<details open>

<summary>Put a new value in the object</summary>

Look for the key `linkA-stage` in the object **request**: `body`. If it exists, put a new value `DOWN`. 

###### SETTINGS

<img src={If1ObjectPutIfExist} alt="If Condition Object Put If Exist" class="myResponsiveImg" width="900px"/>

> **object**: <u>data</u>  <br/>
> [**request**: `body`] <br/>
> **key**: <u>string</u> `linkA-stage` <br/>
> **value**: <u>string</u> `DOWN`

</details>

---

###### ELSE IF:

The condition looks at the **request**: `body > linkA-state` and puts in the new string.

<img src={If1Else} alt="If Condition Else" class="myResponsiveImg" width="900px"/>

> **IF**: <u>Comparison</u>
>> <u>data</u>
> [<b>request</b>: <br/>
> <code>body > typeValue</code>]
>
> **is equal to**: <br/>
> <u>string</u> <code>link-up</code>

<details open>

<summary>Put a new value in the object</summary>

Look for the key `linkA-stage` in the object **request**: `body`. If it exists, put a new value `UP`. 

###### SETTINGS

<img src={If1ObjectElsePutIfExist} alt="If Condition Object Else Put If Exist" class="myResponsiveImg" width="900px"/>

> **object**: <u>data</u> <br/>
> [**request**: `body`] <br/>
> **key**: <u>string</u> `linkA-stage` <br/>
> **value**: <u>string</u> `UP`

</details>

###### OUTPUT

> [**variables**: `output`]

</details>




#### 2. Apply values based on the Link State B Key

<details open>

<summary>IF Condition</summary>

###### IF: `linkB-state`

The condition looks at the **request**: `body > linkB-state` and puts in the new string.

<img src={If2} alt="IF Condition" class="myResponsiveImg" width="900px"/>

> **IF**: <u>Comparison</u>
>> <u>data</u> <br/>
> [<b>request</b>: <code>body > typeValue</code>]
>
> **is equal to**: <br/>
><u>string</u> <code>link-down</code>

<details open>

<summary>Put a new value in the object</summary>

Look for the key `linkB-stage` in the object **request**: `body`. If it exists, put a new value `DOWN`. 

###### SETTINGS

<img src={If2ObjectPutIfExist} alt="If Condition Object Put If Exist" class="myResponsiveImg" width="900px"/>

> **object**: <u>data</u>  <br/>
> [**request**: `body`] <br/>
> **key**: <u>string</u> `linkB-stage` <br/>
> **value**: <u>string</u> `DOWN`

</details>

---

###### ELSE IF:

The condition looks at the **request**: `body > linkB-state` and puts in the new string.

<img src={If2Else} alt="If Condition Else" class="myResponsiveImg" width="900px"/>

> **IF**: <u>Comparison</u>
>> <u>data</u>
> [<b>request</b>: <br/>
> <code>body > typeValue</code>]
>
> **is equal to**: <br/>
> <u>string</u> <code>link-up</code>

<details open>

<summary>Put a new value in the object</summary>

Look for the key `linkB-stage` in the object **request**: `body`. If it exists, put a new value `UP`. 

###### SETTINGS

<img src={If2ElseObjectPutIfExist} alt="If Condition Object Else Put If Exist" class="myResponsiveImg" width="900px"/>

> **object**: <u>data</u> <br/>
> [**request**: `body`] <br/>
> **key**: <u>string</u> `linkB-stage` <br/>
> **value**: <u>string</u> `UP`

</details>

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
curl --location 'localhost:1114/obj-values-str-to-str' \
--header 'Content-Type: application/json' \
--data '{
    "linkA-state" : "link-up",
    "linkB-state" : "link-down"
}'
```