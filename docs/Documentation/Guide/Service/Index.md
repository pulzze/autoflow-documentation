---
sidebar_position: 10
title: Service
description: A service helps the server by taking out commonly used actions into a reusable group.
---
# Service (Workflow Abstraction)

## What is a Service?

- A service helps the server by taking out commonly used actions into a reusable group.
- A service performs set of operations and its’ [action](../https://www.notion.so/Actions-1645af0f140945e89931d7a261a30437)s.
- A service has an INPUT and an OUTPUT similar to functions in a programming language.

For example, a service to get email from a GMAIL API can be reused by many servers, where the service has multiple actions to accomplish the get email task.

![Untitled](Untitled.png)

## Configuring a Service

### Create a new Service

![pic 1](https://github.com/pulzze/autoflow-documentation/assets/85649767/81db14c2-3e99-4d3d-9962-f6ee091acaf1)


Create an ID for the Service.

![pic 2](https://github.com/pulzze/autoflow-documentation/assets/85649767/a625bd5b-3012-4eaa-97d8-165d7dadb0fb)

### Add a new operation

![pic 3](https://github.com/pulzze/autoflow-documentation/assets/85649767/d2c072bf-20d5-44a2-ad5c-1aecfefa949d)

### Define the input and output

&lt;aside&gt;
💡 Behind the scene, [JSON Schema](../https://json-schema.org/understanding-json-schema/) used to perform the input and output validation

&lt;/aside&gt;

![Untitled](Untitled%204.png)

Create Input and Output arguments

![Untitled](Untitled%205.png)

&lt;aside&gt;
💡 Arguments are the keys for the [JSON Schema](../https://json-schema.org/understanding-json-schema/) properties
For example, for the below JSON, username and password are the arguments

```json
    "username": { "type": "string" },
    "password": { "type": "string" },
```

&lt;/aside&gt;

### Add Actions

Refer to Actions section on how to use Actions

### Map the Action’s output with the Service operation output

![Untitled](Untitled%206.png)

&lt;aside&gt;
💡 The data stored in the scope **variable** path *output* is being mapped to the service’s output parameter **name_filtered**

&lt;/aside&gt;

## How to use a Service

### Add Service / Operation action

![Untitled](Untitled%207.png)

### Choose a Service Operation

![Untitled](Untitled%208.png)

### Select the Service operations

![Untitled](Untitled%209.png)

### Set the data to insert into the service INPUT

![Untitled](Untitled%2010.png)

## Versioning the Service

You can version the Service for easier rollback and management.

### Add new version

Press the Add Version to create a new version

![Untitled](@site/docs/Documentation/Guide/Clients/Untitled 6.png)

Click on the trash icon to delete the version.

## Service Data Simulation

Refer to the [Data Simulation](../../Workflow/Data Simulation) section for how to use the simulation feature.

![Untitled](Untitled%2011.png)
