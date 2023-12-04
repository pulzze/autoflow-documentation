---
title: Conditional Switch
sidebar_label: Switch
description: Conditional switch examples
image: img/api-autoflow-logo.png
keywords:
  - conditional
  - switch
  - action
  - example
---

# Conditional SWITCH Example

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Apply SWITCH condition to look for a certain string value.</p>
          <p><b>SWITCH</b>: HTTP Request body <code>condition</code>.</p>
          <ul>
            <li><b>Case 1</b> If the SWITCH contains <code>foo1</code>.</li>
            <li><b>Case 2</b>: If the SWITCH contains <code>foo2</code>.</li>
            <li><b>Default</b>: reply with a message "<b>No matching condition</b>".</li>
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
| Action <br/>[conditional/SWITCH](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/)    | Returns values that fits the condition.  |
| Action <br/>[string/upcase](../../../Documentation/actions-library/data/string/action-string-upcase/)    | Returns a string where converts all characters in the given string to uppercase.    |

</details>

## Details

Send JSON object with keys `condition` and `value` over HTTP request body.

The goal of the operation is to run a conditional SWITCH logic:

- #### SWITCH `condition` contains `foo1`

```json
{ "condition": "foo1", "value": "bar1" }
```

An action is added to perform **upcase** on the `value`. 

For example, if the input string is `bar1`, the output is

```yaml
BAR1
```

- #### ELSE Return

A string value.

```yaml
No matching condition.
```

## Content

### Step 1: Create an API endpoint

Go to the API section and create a new API.
- Name: `sample-conditional`

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

<!-- <img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/> -->

- Path: `/switch`
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
  ```json
  { "condition": "foo1", "value": "bar1" }
  ```

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

#### Case 2

- **ID**: `case2`
- **Request Body**: 
  ```json
  { "condition": "foo2", "value": "bar2" }
  ```

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


## Add Actions to the Flow

### Step 4 : Add SWITCH Conditional

:::tip Required Concepts
Learn how to create a [conditional/SWITCH](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/). 
:::

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

SWITCH condition works based on **match** value. There are a few options in getting the boolean result.

- ### Case 1 : IF the switch contains `foo1`

  <!-- <img src={ValueTypeSelector} alt="Value type selector" class="myResponsiveImg" width="800px"/> -->

  **CASE**: `foo1`

  <p>a</p>

    ### Upcase the values

    #### 1. Add an String Upcase action


    <!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


    #### 2. Configure String Upcase action

    Upcasing the data in the variable **request**: `body > value`. 

    <!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


- ### Case 2 : IF the switch contains `foo2`

  <!-- <img src={ValueTypeSelector} alt="Value type selector" class="myResponsiveImg" width="800px"/> -->

  **CASE**: `foo2`


- ### Default

  Assign the **Return** as a string value and input `No matching condition.`

  <!-- <img src={ValueTypeSelector} alt="Value type selector" class="myResponsiveImg" width="800px"/> -->


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

Try changing the value in the **condition** to be either `foo1` or `foo2`.

#### cURL

```bash
curl --location 'localhost:1112/switch' \
--header 'Content-Type: application/json' \
--data '{ "condition": "foo1", "value": "bar1" }'
```

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="600px"/> -->
