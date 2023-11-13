---
sidebar_position: 4
title: Scope & Variables
sidebar_label: Scope  & Variables
description: Actions are the basic building blocks of a workflow, with a few hundred available to choose from
image: img/api-autoflow-logo.png
keywords:
  - scope
hide_table_of_contents: false
---


import IterationScope from '@site/static/img/workflow/scope-iteration.jpg';
import ActionOutput from '@site/static/img/workflow/action-output.jpg';
import ObjectPut from '@site/static/img/workflow/object-put.png';

# Scope

A scope is a namespace for variables. Think of it as a group of variables.

:::tip Analogy
You can think of scopes as a filing cabinet. 🗄️

Just like a cabinet draw that houses certain set of information, API AutoFlow has scopes to house certain set of data
:::

## Server scopes
This scope only resides within the server being configured.

In the case of HTTP, you have a request scope which includes the original request. You also have a variables scope which is free for you to store whatever values you want.


## Workflow scope and Action output
Each action has an output field where you can define where you would like to store their results for later use, by default it is stored in the **OUTPUT** variable: `output`.

You can change the output to another variable.

<img src={ActionOutput} alt="Action Output" class="myResponsiveImg" width="700px"/>

### Three output tabs

There should be 3 tabs:
- **Action Field Value** (input): Shows what values were resolved for the input
- **Action Output** (output): What the result was for the action
- **All Workflow Data** (data): All the available data to choose from


## Iteration Scope
Iteration action scope exists only inside the iteration action.  Iteration scope can not be accessed after the iteration is complete.

<img src={IterationScope} alt="Iteration Scope" class="myResponsiveImg" width="200px"/>


## Common mistake with scope
Scope is simply a "scope for variables".  But it can get a little confusing at times.

Let's for example, if you want to edit a piece of nested data, try doing it like the second action in the image below. Basically, you do an **object/put** action on a nested variable and writes it back to that same position **OUTPUT** variable: `output`.

Here, if you forget to change the output location, it doesn’t get written to the right location and this can get confusing.

:::tip Choose your own variable name when things get complex
If your data starts getting complex, try storing the data in a differect variable name.
:::

<img src={ObjectPut} alt="Object Put" class="myResponsiveImg" width="700px"/>