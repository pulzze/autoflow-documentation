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

import LeftNav from "@site/static/img/getting-started/fundamental-concept/left-nav.png"
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

## 1. Workflow

A workflow is a common feature among iPaaS platforms for users to create the automation, logic, and data transformation.

A workflow typically starts with a trigger (INPUT) and provides a result (OUTPUT).

:::note Reference
Refer to [Workflow](../Guide/Workflow/) page to learn more about how to use workflow.
:::

<img src={Workflow} alt="Workflow" class="myResponsiveImg" width="300"/>

### ✅ Key point 1: Input and Output

Workflows have Input and Output. 

Depending on where workflow is used, the INPUT and OUTPUT may be different.

#### Server

HTTP server has request and response. Refer to [Server](../Guide/Server/) page to learn more about HTTP Server.

|             |             |
| ----------- | ----------- |
| **INPUT**   | HTTP Request |
| **OUTPUT**  | HTTP Response |


#### Service

Service is like a function in programming with INPUT and OUTPUT arguments. Refer to [Service](../Guide/Service/) page to learn more about Service.

|             |             |
| ----------- | ----------- |
| **INPUT**   | INPUT Argument(s) |
| **OUTPUT**  | OUTPUT Argument(S) |



### ✅ Key point 2: INPUT Simulation

[INPUT Simulation](../Guide/Workflow/Data-Simulation/)



### ✅ Key point 3: Actions, Scopes and variables

[Scope](../../Guide/Workflow/Scope) is where data (variables) get stored and accessed in different parts of the workflow.


### ✅ Key point 4: OUTPUT Mapping

[OUTPUT Mapping](../Guide/Workflow/Output-Mapping/)






1. [API](../../Guide/API/) to define your endpoints
2. [Server](../../Guide/Server/) to host HTTP(S) for each endpoint
3. [Service](../../Guide/Service/) is like a reusable function in programming
4. [Client](../../Guide/Clients/) is a connection to systems such as database


### Where to find the features

<img src={LeftNav} alt="Simulation Button" class="myResponsiveImg" width="500"/>

Refer to [Layout](../Layout/) for more details

## Commons steps when creating a new solution

1. Create API endpoint
2. Create a server for the API endpoint
3. Join actions in workflow

- If you want to create a reusable function

4. Create a service that you an call from any workflow

- Need to use database or other clients?

5. Create a client to connect with database


[data-type](../Knowledge/data-types)


## Workflow

Everything in API Autoflow evolves around Workflow.

### Actions


### Scope


### Data types





4. Data types


## Other
To effectively use API AutoFlow, there are a few basic technology conceptions that you need to know.

### API


### Server


### Service


### Client