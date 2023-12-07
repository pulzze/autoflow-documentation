---
title: Conditional IF
sidebar_label: IF
description: Conditional IF examples
image: img/api-autoflow-logo.png
keywords:
  - conditional
  - if
  - action
  - example
---

import CreateApi from '@site/static/img/example/conditional/create-api.jpg';
import CreateApiPath from '@site/static/img/example/conditional/if/create-api-path.jpg';
import Postman from '@site/static/img/example/conditional/if/postman.jpg';
import Simulation from '@site/static/img/example/conditional/if/simulation.jpg';
import CreateServer from '@site/static/img/example/conditional/create-server.jpg';
import CreateServerOperation from '@site/static/img/example/server-add-api-operation.jpg';
import ConditionalIf from '@site/static/img/example/conditional/if/conditional-if.jpg';
import ConditionalElse from '@site/static/img/example/conditional/if/else-if.jpg';
import MathCalculate from '@site/static/img/example/conditional/if/math-calculate.jpg';
import ServerWorkflowDefaultOutput from '@site/static/img/example/server-workflow-default-output.jpg';

# Conditional IF Example

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Apply condition to the incoming number.</p>
          <ul>
            <li><b>IF</b> the number is greater than <b>10</b>: multiply by <b>10</b>.</li>
            <li><b>ELSE</b>: reply with a message "<b>The number is not great than 10</b>".</li>
          </ul>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-conditional-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
    </div>
    <div class="colTwoClearer"></div>
</div>

<!-- <img src={IfConditionFlow} alt="If Condition Flow" class="myResponsiveImg" width="800px"/> -->

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
| Action <br/>[conditional/IF](../../../Documentation/actions-library/flow/conditional/action-conditional-if/)    | Returns values that fits the condition.  |
| Action <br/>[math/calculate](../../../Documentation/actions-library/data/math/action-math-calculate/)    | Calculate mathematical expression.    |

</details>


## Details

Send JSON object with a key `condition` over HTTP request body.

The goal of the operation is to run a conditional logic:

- #### IF greater than 10

An action is added to perform a math calculation of multiplying by `10`. 

For example, if the input number is `15`, the output is

```yaml
150
```

- #### ELSE Return

A string value.

```yaml
The number is not great than 10.
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

- ID: `sample-conditional`

</details>

<details open>

<summary>Create an API Path</summary>

<img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/>

- Path: `/if`
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

- Server ID: `sample-conditional`
- Port Number: `1113`  Feel free to select your own port number
- Linked API: `sample-conditional`  (select the API you created above)

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

<img src={Postman} alt="Send Postman Request" class="myResponsiveImg" width="600px"/>

[API Autoflow Postman Collections](https://www.postman.com/interactor/workspace/api-autoflow-interactor/folder/13591115-f255076a-da4f-4635-a1f9-2b27ccf20c66?ctx=documentation)

###### cURL
```bash
curl --location 'localhost:1113/if' \
--header 'Content-Type: application/json' \
--data '{
    "condition": 15
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

#### 1. Apply condition to the input data

IF condition works based on **truthy** value. There are a few options in getting the boolean result.

<details open>

<summary>(IF): Greater than 10</summary>

In this example, we will use the "**Value type selector / Comparison**"  `greater-than` to compare the HTTP request body with a number "**10**".

The two number to compare:
- 1st number: Data from request body `condition` field
- 2nd number: `10`

<img src={ConditionalIf} alt="Conditional IF" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **IF**: <u>Comparison</u>
>> <u>data</u> <br/>
>> [<b>request</b>: <code>body > condition</code>]
>
> **is greater than to**:
>> <u>number</u> <br/>
>> <code>10</code>


##### Multiply by 10

<details open>

<summary>Math Calculate</summary>

<img src={MathCalculate} alt="Math Calculate" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **expression**: <u>string</u>
>> `10 + number`
>
> **variables**: <u>object</u> 
>> **number**: <u>data</u>
>>> [**request**: `body > condition`]

</details>

###### OUTPUT

> **variables**: `output` <br/>

</details>


<details open>

<summary>(Else): Return message</summary>

<img src={ConditionalElse} alt="Conditional Else" class="myResponsiveImg" width="900px"/>

###### SETTINGS

> **Return**: <u>string</u>
>> `Number is less than 10`

###### OUTPUT

> **variables**: `output` <br/>

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

###### cURL

```bash
curl --location 'localhost:1113/if' \
--header 'Content-Type: application/json' \
--data '{
    "condition": 15
}'
```