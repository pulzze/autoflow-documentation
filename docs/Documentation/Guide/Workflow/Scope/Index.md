---
sidebar_position: 1
title: Scope
sidebar_label: Scope
description: Actions are the basic building blocks of a workflow, with a few hundred available to choose from
image: img/api-autoflow-logo.png
keywords:
  - scope
hide_table_of_contents: false
---


import iteration_scope from '@site/static/img/workflow/scope-iteration.jpg';

# Scope

A scope is a namespace for variables.  

:::tip Analogy
You can think of scopes as a filing cabinet. 🗄️

Just like a cabinet draw that houses certain set of information, API AutoFlow has scopes to house certain set of data
:::

## Server scopes
In the case of HTTP, you have a request scope which includes the original request. You also have a variables scope which is free for you to store whatever values you want.


## Action Scopes
Actions have an output field where you can define where you would like to store their results for later use, by default it uses the key: output.

## Iteration Scope
Iteration action scope exists only inside the iteration action.  Iteration scope can not be accessed after the iteration is complete.

<img src={iteration_scope} alt="Iteration Scope" class="myResponsiveImg" width="200px"/>