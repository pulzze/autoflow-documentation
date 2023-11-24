---
sidebar_position: 2
title: Required Concepts
sidebar_label: Requirements
description: Concepts that users need to know to effectively use API AutoFlow
image: img/api-autoflow-logo.png
keywords:
  - required concepts
hide_table_of_contents: true
---

import Workflow from "@site/static/img/requirement/knowledge/workflow.png"

# Requirement

## Hardware

**CPU**: Intel, ARM <br/>
**Memory**: Recommended minimum is 512MB <br/>
**Storage**: Recommended minimum is 1GB <br/>

## Knowledge

To effectively use API AutoFlow, there are a few basic technology conceptions that you need to know.

### 1. Workflow

Workflow consists of INPUT, Action, and OUTPUT.

✅ **INPUT Simulation** <br/>
Workflow receives the data through INPUT

✅ **Actions and Scope variables** <br/>
Performs some action(s)

✅ **OUTPUT Mapping** <br/>
Gives data back through OUTPUT 

<img src={Workflow} alt="Workflow" class="myResponsiveImg" width="300"/>

### 2. Server

>> HTTP(S) Server.
>> 
>> **INPUT**: HTTP request <br/>
>> **OUTPUT**: HTTP response

### 3. Service

>> Service is like a function in programming.
>> 
>> **INPUT**: argument(s) <br/>
>> **OUTPUT**: argument(s)

### APIs

>> API definition using OpenAPI standard.

### Client

>> Connection to services such as Database and MQTT.