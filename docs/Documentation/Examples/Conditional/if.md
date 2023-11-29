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

# Conditional IF Example

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Apply condition to the incoming number.</p>
          <ul>
            <li><b>IF</b> the number is greater than <b>10</b>: multiply by <b>2</b>.</li>
            <li><b>ELSE</b>: reply with a message "<b>The number is not great than 10</b>".</li>
          </ul>
          <p>Simulate two test cases</p>
          <ul>
            <li><b>case1</b>: with number <code>15</code></li>
            <li><b>case2</b>: with number <code>5</code></li>
          </ul>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-conditional-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=aiJoS3eM6Jw"><button class="btnVideo">🎥 Watch Video</button></a>
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

An action is added to perform a math calculation of multiplying by `2`. 

For example, if the input number is `15`, the output is

```yaml
30
```

- #### ELSE Return

A string value.

```yaml
The number is not great than 10.
```


## Content


### Step 1: Create an API endpoint

Go to the API section and create a new API.
- Name: `sample-conditional`

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

<!-- <img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/> -->

- Path: `/if`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation
:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->


- Server ID: `sample-conditional`
- Port Number: `1112`  Feel free to select your own port number
- Linked API: `sample-conditional`  (select the API you created above)

#### Create a Server Operation

<!-- <img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/> -->

- Press the "Add API Operation"
- Select the API endpoint created above

### Step 3 : Create Data Simulation for the two conditions

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

#### Case 1

- **ID**: `case1`
- **Request Body**: 
  ```js
  { "condition": 15 }
  ```

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


#### Case 2

- **ID**: `case2`
- **Request Body**: 
  ```js
  { "condition": 5 }
  ```

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->



## Add Actions to the Flow

### Step 4 : Add IF Conditional

:::tip Required Concepts
Learn how to create a [conditional/IF](../../../Documentation/actions-library/flow/conditional/action-conditional-if/). 
:::

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

IF condition works based on **truthy** value. There are a few options in getting the boolean result.

1. Value type selector / Boolean
2. Value type selector / Conditions
3. Value type selector / Comparison
4. Action / Condition

- ### IF condition : IF greater than 10

  In this example, we will use the "**Value type selector / Comparison**"  `greater-than` to compare the HTTP request body with a number "**10**".

  The two number to compare:
  - 1st number: Data from request body `condition` field
  - 2nd number: `10`

  <!-- <img src={ValueTypeSelector} alt="Value type selector" class="myResponsiveImg" width="800px"/> -->
  <p>a</p>

    - ### Add Math Action

      :::tip Required Concepts
      Learn how to create a [math/calculate](../../../Documentation/actions-library/data/math/action-math-calculate/). 
      :::

      <!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

      #### Configure Math Calculate action

      - **variables**: are object that can be inserted into the expression
      - **expression**: is a string that performs the math calculation.



- ### Configure ELSE condition

  Assign the **Return** as a string value and input `The number is not great than 10.`


### Step 6 : Map the HTTP response with the New Variable

Both iteration action and HTTP response body are set to **variables**: `output`, there's no change that needs to be made

<!-- <img src={HttpResponseCapitalized} alt="Http Response Capitalized" class="myResponsiveImg" width="400px"/> -->

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

### Step 7 : Test the API with Postman or CURL

Try changing the value in the **condition** to be greater or less than `10`.

For example, `5` or `20`

#### cURL

```bash
curl --location 'localhost:1112/if' \
--header 'Content-Type: application/json' \
--data '{
    "condition": 15
}
```

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->

