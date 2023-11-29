---
title: Datetime to Unix time
sidebar_label: Datetime to Unix
description: Change date-time to unix-epoch time (ex. Convert the YANG timestamp to Epoch timestamp in milliseconds)
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
  - datetime
  - unix time
---

# Datetime to Unix time

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Received date-time in a standard ISO format and convert to unix time. For example </p>
          <p>From <code>YYYY-MM-DDThh:mm:ss.sTZD</code> to <code>1701121759</code>.</p>
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
| Action <br/>[datetime/datetime-to-unix-time](../../../Documentation/actions-library/data/date-time/action-datetime-datetime-to-unix-time/)    | Converts the given datetime to unix time.  |

</details>


## Detail

The HTTP request has an input:
```json
{
    "timestamp" : "2023-11-16T04:13:00.000+00:00"
}
```

The goal of the operation is to convert the date-time into unix time:

```json
{
    "timestamp": 1700107980
}
```

## Content

### Step 1: Create an API endpoint

Go to the API section and create a new API.

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

#### Add an API Path

<!-- <img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/> -->

- Path: `/datetime-to-unix`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation

Go to the Server section and create a new Server.

:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->


- Server ID: `sample-data-transformation`
- Port Number: `1114`  Feel free to select your own port number
- Linked API: `sample-data-transformation` (select the API you created above)


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

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->

#### 2. Create a Test Simulation from the Received Data

API Autoflow captures the data received and it can be used to create data simulation.

<!-- <img src={CreateSimulation} alt="Create Simulation" class="myResponsiveImg" width="450px"/> -->

#### 3. Name the Simulation

<!-- <img src={NameSimulation} alt="Name Simulation" class="myResponsiveImg" width="400px"/> -->


#### 4. Select "real-data" Simulation

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


## Add Action to the Flow

You can add actions to transform the data.

### Step 5 : Add an action

#### 1. Add Date-time to Unix time

<!-- <img src={AddStringCapitalizeAction} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->

#### 2. Configure Action

We are converting the datetime in variable **request**: `body > timestamp`. 

<!-- <img src={StringCapitalize} alt="String Capitalize" class="myResponsiveImg" width="800px"/> -->


### Step 6 : Map the HTTP response with the New Variable

Both the action's output and HTTP response body are set to **variables**: `output`. There's no change that needs to be made.

<!-- <img src={HttpResponseCapitalized} alt="Http Response Capitalized" class="myResponsiveImg" width="400px"/> -->

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

### Step 7 : Test the API with Postman or CURL

#### cURL

```bash
curl --location 'localhost:1114/datetime-to-unix' \
--header 'Content-Type: application/json' \
--data '{
    "timestamp" : "2023-11-16T04:13:00.000+00:00"
}'
```

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->






