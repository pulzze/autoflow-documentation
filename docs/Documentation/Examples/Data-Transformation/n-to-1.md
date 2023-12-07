---
sidebar_position: 4
title: Data Normalization N to 1
sidebar_label: N to 1
description: Transform log from multiple sources into a standardized format
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
---


import CreateApi from '@site/static/img/example/data-transformation/create-api.jpg';
import CreateApiPath from '@site/static/img/example/data-transformation/n-to-1/create-api-path.jpg';
import Postman from '@site/static/img/example/data-transformation/n-to-1/postman.jpg';
import Postman1 from '@site/static/img/example/data-transformation/n-to-1/postman1.jpg';
import Simulation from '@site/static/img/example/data-transformation/n-to-1/simulation.jpg';
import Simulation1 from '@site/static/img/example/data-transformation/n-to-1/simulation1.jpg';
import CreateServer from '@site/static/img/example/data-transformation/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';
import ConditionSwitch from '@site/static/img/example/data-transformation/n-to-1/condition-switch.jpg';
import Case1 from '@site/static/img/example/data-transformation/n-to-1/case-1.jpg';
import Case1StringSplit from '@site/static/img/example/data-transformation/n-to-1/case-1-string-split.jpg';
import Case1Return from '@site/static/img/example/data-transformation/n-to-1/case-1-return.jpg';
import Case2 from '@site/static/img/example/data-transformation/n-to-1/case-2.jpg';
import Case2Return from '@site/static/img/example/data-transformation/n-to-1/case-2-return.jpg';
import Default from '@site/static/img/example/data-transformation/n-to-1/default.jpg';

# N to 1

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          Create a <a href="/docs/Documentation/Examples/API/#2-create-server">Server</a> that receives data in multiple input arguments and processes the data into a common "object" output based on an input criteria.
          <p>In the below example, if the source is "website_user", the name will be split into first and last name. For other case, in the below example source being "service_user", the values from the input will directly inserted into a new object.</p>
        </div>
        <br />
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#configuration-management">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://youtu.be/yo7upiYdsSw"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>

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
| Action <br/>[condition/switch](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/)    | Returns values that fits on switch case. <br />If the input value is not in the case list, it returns the value of default.    |
| Action <br/>[string/split](../../../Documentation/actions-library/data/string/action-string-split/)    | Returns array that divides a string into substrings at each Unicode whitespace occurrence with leading and trailing whitespace ignored.    |

</details>



## Details

There are two sources of input:

**First input (case 1)**

- **source**: `service_user`
- **first**: `John`
- **last**: `Doe`

```js
{
  "fast": "John",
  "last": "Doe",
  "source": "service_user"
}
```

**Second input (case 2)**

- **source**: `website_user`
- **name**: `Peter Parker`


```js
{
  "name": "Peter Parker",
  "source": "website_user"
}
```

**Result**

The return should be an object like:

**Return 1**

```js
{
  "first_name": "John",
  "last_name": "Doe"
}
```

**Return 2**

```js
{
  "first_name": "Peter",
  "last_name": "Parker"
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

- Path: `/n-to-1`
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

<summary>1. Send a HTTP request from Postman or cURL</summary>

**First input (case 1)**

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-5e6b1ace-c24a-4a7d-8807-83e47aeb96cc?ctx=documentation)

###### cURL


```js
{
  "fast": "John",
  "last": "Doe",
  "source": "service_user"
}
```

**Second input (case 2)**

<img src={Postman1} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

```js
{
  "name": "Peter Parker",
  "source": "website_user"
}
```

</details>

<details open>

<summary>2. Check the data is received by the server endpoint</summary>

API Autoflow captures the data received and it can be used to create data simulation.

**Case 1**

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="900px"/>

**Case 2**

<img src={Simulation1} alt="Simulation" class="myResponsiveImg" width="900px"/>

</details>

### Action(s)

:::tip Required Concepts
Learn how to create a [Actions](../../../Documentation/Guide/Workflow/Action/). 
:::

Add actions to transform the data.

#### 1. IF the data is from Website vs Service

SWITCH based on the [**input**: `source`]

<details open>

<summary>Condition Switch</summary>

<img src={ConditionSwitch} alt="Condition Switch" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **SWITCH**: <u>data</u>
>> [**input**: `source`]

---

##### (Case 1): Look for the source "website_user"

If the source has the value `website_user`, it will split the string.

<img src={Case1} alt="Condition Switch Case 1" class="myResponsiveImg" width="900px"/>

<details open>

<summary>String Split</summary>

:::tip Required Concepts
Learn how to use [string/split](../../../Documentation/actions-library/data/string/action-string-split/) actions.
:::

<img src={Case1StringSplit} alt="Condition Switch Case 1" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **string/split** <u>data</u>
>> [<b>request</b>: <code>body > name</code>]

###### OUTPUT

> **variables**: `output` <br/>

</details>

<details open>

<summary>RETURN</summary>

<img src={Case1Return} alt="Case Return" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **RETURN** <u>object</u>
>> **first_name** <u>data</u>
>>> [<b>variables</b>: <code>output > 0</code>]
>
>> **last_name** <u>data</u>
>>> [<b>variables</b>: <code>output > 1</code>]

</details>

---

##### (Case 2): Look for the source "service_user"

<img src={Case2} alt="Condition Switch Case 2" class="myResponsiveImg" width="900px"/>


<details open>

<summary>Return</summary>

<img src={Case2Return} alt="Case 2 Return" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **RETURN** <u>object</u>
>> **first_name** <u>data</u>
>>> [<b>variables</b>: <code>body > first</code>]
>
>> **last_name** <u>data</u>
>>> [<b>variables</b>: <code>body > last</code>]

</details>

###### DEFAULT

<img src={Default} alt="Condition Switch Default" class="myResponsiveImg" width="900px"/>

> **Return**: <u>string</u>
>> `No match found` <br/>

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

#### cURL

**First input (case 1)**

```js
{
  "fast": "John",
  "last": "Doe",
  "source": "service_user"
}
```

**Second input (case 2)**

```js
{
  "name": "Peter Parker",
  "source": "website_user"
}
```