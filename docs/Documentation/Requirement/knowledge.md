---
sidebar_position: 2
title: Required Knowledge
sidebar_label: Knowledge
description: Required knowledge
image: img/api-autoflow-logo.png
keywords:
  - knowledge
  - requirement
hide_table_of_contents: false
---

import LeftNav from "@site/static/img/requirement/knowledge/left-nav.png"
import Workflow from "@site/static/img/requirement/knowledge/workflow.png"

# Knowledge

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>There are a few concepts that you need to know before using API Autoflow effectively.</p>
          <p>Since these concepts are core to using API AutoFlow, We recommend you read this page and watch a short video on the left before moving forward.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=0qhqOcQKruM"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>

## [Workflow](../Guide/Workflow/)

A workflow is a common feature among iPaaS platforms for users to create the automation, logic, and data transformation.

A workflow starts with a trigger (INPUT) and provides a result (OUTPUT).

:::note Reference
Refer to [Workflow](../Guide/Workflow/) page to learn more about how to use workflow.
:::

<img src={Workflow} alt="Workflow" class="myResponsiveImg" width="300"/>

Depending on where workflow is used, the INPUT and OUTPUT may be different.

### 1. [INPUT Simulation](../Guide/Workflow/Input-Simulation/)

The first thing when creating a workflow is to [simulate](../Guide/Workflow/Input-Simulation/) the INPUT data.

Simulation provides the capability to mimic or emulate the input data, allowing developers to test, visualize, and refine their designs as they build the workflow.

### 2. [Actions, Scopes and variables](../../Documentation/Guide/Workflow/Scope/)

Then, actions can be added to achieve your desired outcome.

[Scope](../../Documentation/Guide/Workflow/Scope/) is where data (variables) get stored and accessed in different parts of the workflow.

### 3. [OUTPUT Mapping](../Guide/Workflow/Output-Mapping/)

The workflow's OUTPUT needs to be [mapped](../Guide/Workflow/Output-Mapping/) with one of the data in the scope.

## [Server](../Guide/Server/)

HTTP server has request and response. Refer to [Server](../Guide/Server/) page to learn more.

|             |             |
| ----------- | ----------- |
| **INPUT**   | HTTP Request |
| **OUTPUT**  | HTTP Response |


## [Service](../Guide/Service/)

Service is like a function in programming with INPUT and OUTPUT arguments. Refer to [Service](../Guide/Service/) page to learn more.

|             |             |
| ----------- | ----------- |
| **INPUT**   | INPUT Argument(s) |
| **OUTPUT**  | OUTPUT Argument(S) |


## [Kafka](../Guide/Clients/Kafka/) Subscribe

Kafka subscribes to an event and "**RECEIVE**" data but does not have an output. Refer to [Kafka](../Guide/Clients/Kafka/) page to learn more.

|             |             |
| ----------- | ----------- |
| **INPUT**   | RECEIVED |
| **OUTPUT**  | No output |


## [API](../Guide/API/)

[OpenAPI](../Guide/API/) schema to define your endpoints

## [Client](../Guide/Clients/)

[Client](../Guide/Clients/) is a connection to systems such as database

## [Data Type](../Guide/data-types)

You need to know the types of data in order to work with the data.

- String
- Object
- Array
- Number
- Null

:::note
JSON (JavaScript Object Notation) is a stringified form of data consisting of object (key-value pairs), arrays, and nested structures. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
:::

### Where to find the features

Refer to [Layout](../Getting-Started/Layout/) for more details

<img src={LeftNav} alt="Simulation Button" class="myResponsiveImg" width="500"/>

## Common steps when creating a new solution

1. Create [API](../Guide/API/) endpoint
2. Create a [Server](../Guide/Server/) for the [API](../Guide/API/) endpoint
3. Join the [Actions](../Guide/Workflow/Action/) in workflow