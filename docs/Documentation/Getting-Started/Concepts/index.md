---
sidebar_position: 3
title: Concepts
sidebar_label: Fundamental Concepts
description: Basic concepts to know before using API Autoflow
image: img/api-autoflow-logo.png
keywords:
  - fundamental concepts
hide_table_of_contents: false
---

import LeftNav from "@site/static/img/getting-started/fundamental-concept/left-nav.png"

# Fundamental Concepts

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>There are a few concepts that you need to know before using API Autoflow effectively.</p>
          <p>Since these concepts are core to using API AutoFlow, We recommend you watch a short video on the left before moving forward.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=0qhqOcQKruM"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>

### Key concepts
          
1. [API](../../Guide/API/) to define your endpoints
2. [Server](../../Guide/Server/) to host HTTP(S) for each endpoint
3. [Service](../../Guide/Service/) is like a reusable function in programming
4. [Client](../../Guide/Clients/) is a connection to systems such as database
5. [Workflow](../../Guide/Workflow/) is where the automation and data transformation happens<br />- [Scope](../../Guide/Workflow/Scope) is where data (variables) get stored and accessed in different parts of the workflow.

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