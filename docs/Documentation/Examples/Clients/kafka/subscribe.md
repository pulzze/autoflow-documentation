---
title: Kafka Subscribe
sidebar_label: Subscribe
description: Kafka Subscribe
image: img/api-autoflow-logo.png
keywords:
  - kafka
  - client
  - subscribe
---

# Kafka Subscribe

## Overview

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Subscribe to Kafka event and receive data.</p>
          <p>In the below example, we will log the data received from a Kafka topic.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-client-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
    </div>
    <div class="colTwoClearer"></div>
</div>
<br />

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Guide/Workflow/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
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