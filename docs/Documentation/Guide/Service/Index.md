---
sidebar_position: 10
title: Service
description: A service helps the server by taking out commonly used actions into a reusable group.
---

import ServiceDataSimulation from "@site/static/img/guide/Service/service-data-simulation.png"
import SetDataServiceInput from "@site/static/img/guide/Service/set-data-service-input.png"
import SelectServiceOperations from "@site/static/img/guide/Service/select-service-operations.png"
import ChooseServiceOperation from "@site/static/img/guide/Service/choose-service-operation.png"
import AddServiceOperation from "@site/static/img/guide/Service/add-service-operation.png"
import MapActionOutput from "@site/static/img/guide/Service/map-action-output.png"
import CreateInputOutputArgs from "@site/static/img/guide/Service/create-input-output-args.png"
import DefineInputOutput from "@site/static/img/guide/Service/define-input-output.png"
import AddNewOperation from "@site/static/img/guide/Service/add-new-operation.png"
import AddNewOperation2 from "@site/static/img/guide/Service/add-new-operation2.png"
import CreateServiceId from "@site/static/img/guide/Service/create-service-id.png"
import CreateNewService from "@site/static/img/guide/Service/create-new-service.png"
import AddNewVersion from "@site/static/img/guide/Service/add-new-version.png"
import NewInputOutput from "@site/static/img/guide/Service/new-input-output.png"
import NewServiceOperation from "@site/static/img/guide/Service/new-service-operation.png"
import ServiceOverview from "@site/static/img/guide/Service/service-overview.png"
import TutorialService from '@site/static/img/tutorial-services.png';

# Service (Workflow Abstraction)

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
            <p>Service is a reusable function</p>
            <ul>
                <li>Takes in a set of <b>INPUT</b> arguments</li>
                <li>Performs set of actions</li>
                <li>Gives out an <b>OUTPUT</b></li>
            </ul>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=niH3M67btco&t=1s"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>


### How to use Service
- A service helps the server by taking out commonly used actions into a reusable group.
- A service performs a set of operations and its’ [action](../../actions-library)s.
- A service has an INPUT and an OUTPUT similar to **functions** in a programming language.

For example, a service to get email from a GMAIL API can be reused by many servers, where the service has multiple actions to accomplish the get email task.

![API Autoflow Overview](@site/static/img/guide/getting-started/ApiAutoflow.png)

## Configuring a Service

### Create a new Service

<div class="myResponsiveImg">
    <img src={CreateNewService} alt="Creating New Service" class="myResponsiveImg"/>
</div>

### Create an ID for the Service

<div class="myResponsiveImg">
    <img src={CreateServiceId} alt="Creating Service ID" class="myResponsiveImg"/>
</div>

### Add a new operation

<div class="myResponsiveImg">
    <img src={AddNewOperation} alt="Adding New Operation" class="myResponsiveImg"/>
</div>
<div class="myResponsiveImg">
    <img src={AddNewOperation2} alt="Adding New Operation" class="myResponsiveImg"/>
</div>

Then a new service operation will be created. Now you can click the service operation to expand.
<div class="myResponsiveImg">
    <img src={NewServiceOperation} alt="New Operation" class="myResponsiveImg"/>
</div>

### Create Input and Output arguments

<div class="myResponsiveImg">
    <img src={CreateInputOutputArgs} alt="Creating Input and Output Arguments" class="myResponsiveImg"/>
</div>

💡 Arguments may also be defined in [JSON Schema](https://json-schema.org/understanding-json-schema/). For example, for the below JSON, 'username' and 'password' are string arguments:

```json
    "username": { "type": "string" },
    "password": { "type": "string" },
```
### Define the input and output

💡 Behind the scene, [JSON Schema](https://json-schema.org/understanding-json-schema/) is used to perform the input and output validation.

<div class="myResponsiveImg">
    <img src={DefineInputOutput} alt="Defining Input and Output" class="myResponsiveImg"/>
</div>
You can add more input and output values with "add" buttons.
Checkbox represents input/output value is required or not.
<div class="myResponsiveImg">
    <img src={NewInputOutput} alt="Defining Input and Output" class="myResponsiveImg"/>
</div>


### Add Actions

Refer to the [Actions](../../Guide/Workflow/Action) section on how to use Actions.

### Map the Action’s output with the Service operation output

<img src={MapActionOutput} alt="Mapping Action Output" />

💡 The data stored in the scope variable path output is being mapped to the service’s output

💡 You can put actions using + button in before or after the action.
### How to use a Service

Add Service/Operation action

<div class="myResponsiveImg">
    <img src={AddServiceOperation} alt="Adding Service/Operation Action" class="myResponsiveImg"/>
</div>
Choose a Service Operation
<div class="myResponsiveImg">
    <img src={ChooseServiceOperation} alt="Choosing a Service Operation" class="myResponsiveImg"/>
</div>
Select the Service operations
<div class="myResponsiveImg">
    <img src={SelectServiceOperations} alt="Selecting Service Operations" class="myResponsiveImg"/>
</div>
Set the data to insert into the service INPUT
<div class="myResponsiveImg">
    <img src={SetDataServiceInput} alt="Setting Data for Service Input" class="myResponsiveImg"/>
</div>

### Versioning the Service

You can version the Service for easier rollback and management.

### Add new version

<div class="myResponsiveImg">
    <img src={AddNewVersion} alt="Setting Data for Service Input" class="myResponsiveImg"/>
</div>

Press the Add Version to create a new version.

Click on the trash icon to delete the version.

### Service Data Simulation

Refer to the [Data Simulation](../../Guide/Workflow/Data-Simulation) section for how to use the simulation feature.

<div class="myResponsiveImg">
    <img src={ServiceDataSimulation} alt="Service Data Simulation" class="myResponsiveImg"/>
</div>
