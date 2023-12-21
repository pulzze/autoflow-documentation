---
sidebar_position: 1
title: Kafka Subscribe
sidebar_label: Subscribe
description: Kafka Subscribe
image: img/api-autoflow-logo.png
keywords:
  - kafka
  - client
  - subscribe
---

import AddTopic from '@site/static/img/example/client/kafka/subscribe/add-topic.jpg';
import Simulation from '@site/static/img/example/client/kafka/subscribe/simulation.jpg';
import SystemLog from '@site/static/img/example/client/kafka/subscribe/system-log.jpg';
import CheckLog from '@site/static/img/example/client/kafka/subscribe/check-log.jpg';
import Output from '@site/static/img/example/client/kafka/subscribe/output.jpg';

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

:::danger
Make sure you have followed the steps to [create Kafka client](./Index.md). 
:::

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [Client]](../../../Examples/Clients)  | A server accepts and handles the request and response. |
| [Simulation](../../../Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Guide/Workflow/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[system/log](../../../../Documentation/actions-library/call/system/action-system-log)    | Prints a log to standard output.  |

</details>


## Detail

### Original Object

```js
  {
      "received": ""
  }
```

### Result

The log action prints out the message from Kafka event


## Content

### Subscribe to an Event

#### 1: Event

:::note Required Concepts
Learn how to create an [Client](./Index.md). 
:::


From the **tab**, go to the Event.

<details open>

<summary>Add topic</summary>


<img src={AddTopic} alt="Add topic" class="myResponsiveImg" width="500px"/>

- ID: `sample-topic`

</details>


#### 2 : Create Data Simulation using Real Data

<details open>

<summary>Simulation</summary>

:::tip Required Concepts
Learn how to create a [Simulation](../../../Guide/Workflow/INPUT-Simulation/). 
:::

<summary>Manually create a test simulation</summary>

<img src={Simulation} alt="Simulation" class="myResponsiveImg" width="800px"/>

</details>


### Action(s)

:::tip Required Concepts
Learn how to create a [Actions](../../../Guide/Workflow/Action/). 
:::

Add actions to transform the data.


#### 1. System Log

:::tip Required Concepts
[system/log](../../../../Documentation/actions-library/call/system/action-system-log) 
:::

For this example, we will simply log the messages from the event.

<details open>

<summary>System Log</summary>

###### SETTINGS

<img src={SystemLog} alt="String Capitalize" class="myResponsiveImg" width="900px"/>

> **label**:<u>string</u>
>> `Kafka-event`
>
> **level**:<u>enum</u>
>
>> `info`
>
> **value**:<u>data</u>
>> [<b>received</b>: ]

###### OUTPUT

> **variables**: `output`

</details>



#### 2. Check Log

On the right pane, check the message in the log.

<img src={CheckLog} alt="String Capitalize" class="myResponsiveImg" width="500px"/>


### OUTPUT: Events don't have an output

<img src={Output} alt="No output" class="myResponsiveImg" width="800px"/>