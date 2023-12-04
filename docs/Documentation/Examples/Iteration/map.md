---
sidebar_position: 1
title: Iteration Map
sidebar_label: Map
description: Iteration map examples
image: img/api-autoflow-logo.png
keywords:
  - iteration
  - Map
  - action
  - example
---

# Iteration Map Example

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Iterate over an <b>array</b> of <b>strings</b>.</p>
          <p>Then, upcase each letter using <b>string/upcase</b> action</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-iteration-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=aiJoS3eM6Jw"><button class="btnVideo">🎥 Watch Video</button></a>
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
| Action <br/>[iteration/map](../../../Documentation/actions-library/flow/iteration/action-iteration-map/)    | Iterate over array of data mapping result to each array position.    |
| Action <br/>[string/upcase](../../../Documentation/actions-library/data/string/action-string-upcase/)    | Returns a string where converts all characters in the given string to uppercase.    |

</details>


## Details

The HTTP request body has an array with 2 values:

#### Original array

```yaml
[ "foo1", "foo2" ]
```

The goal of the operation is to iterate over the array and create a new array:

#### New array (after iteration)

```yaml
[ "FOO1", "FOO2" ]
```

## Content


### Step 1: Create an API endpoint

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

Go to the API section and create a new API.
- Name: `sample-iteration`

<!-- <img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/> -->

- Path: `/iteration-map`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation
:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->


- Server ID: `sample-iteration`
- Port Number: `1112`  Feel free to select your own port number
- Linked API: `sample-iteration`  (select the API you created above)

#### Create a Server Operation

<!-- <img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/> -->

- Press the "Add API Operation"
- Select the API endpoint created above

### Step 3 : Create Data Simulation using Real Data

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

<!-- <img src={SimulateData} alt="Simulate Data" class="myResponsiveImg" width="750px"/> -->

We will use the "real data" to create the test simulation.

#### 1. Send a HTTP request from Postman or CURL

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="600px"/> -->

#### 2. Create a Test Simulation from the Received Data

API Autoflow captures the data received and it can be used to create data simulation.

<!-- <img src={CreateSimulation} alt="Create Simulation" class="myResponsiveImg" width="450px"/> -->

#### 3. Name the Simulation

<!-- <img src={NameSimulation} alt="Name Simulation" class="myResponsiveImg" width="400px"/> -->


#### 4. Select "real-data" Simulation

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


## Add Actions to the Flow

### Step 4 : Iterate over the array

#### 1. Add an Iteration Map action

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

##### Configure Iteration Map action

**Iterable**: <u>data</u> **request**: `body`

- Array to iterate over

**SCOPE**: <u>string</u> `loop-var`

- Create a variable to store the values as the action iterates over the array.

:::info
- Array: `[ "foo1", "foo2" ]`
- Scope `loop-var` stores each value
  - Make the value available inside the iteration one-by-one. The 1st value is available to be used for configuration.
:::

### Step 5 : Upcase the values

#### 1. Add an String Upcase action

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

##### Configure String Upcase action

We are upcasing the data in the variable **loop-var**: `value`. 

:::info INDEX vs VALUE
Note that when selecting the data to work with in the iteration, there are two key you can work with
- INDEX: Position in the array
- VALUE: Value in the array
::: 


### Step 6 : Map the HTTP response with the New Variable

Both iteration action and HTTP response body are set to **variables**: `output`, there's no change that needs to be made

<!-- <img src={HttpResponseCapitalized} alt="Http Response Capitalized" class="myResponsiveImg" width="400px"/> -->

### Step 7 : Test the API with Postman or CURL

Notice that the values are upcased.

<!-- <img src={PostmanFinal} alt="Postman Final" class="myResponsiveImg" width="800px"/> -->