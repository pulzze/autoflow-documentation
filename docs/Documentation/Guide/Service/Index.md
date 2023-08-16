---
sidebar_position: 10
title: Service
description: A service helps the server by taking out commonly used actions into a reusable group.
---

import ServiceDataSimulation from "@site/static/img/Guide/Service/service_data_simulation.png"
import SetDataServiceInput from "@site/static/img/Guide/Service/set_data_service_input.png"
import SelectServiceOperations from "@site/static/img/Guide/Service/select_service_operations.png"
import ChooseServiceOperation from "@site/static/img/Guide/Service/choose_service_operation.png"
import AddServiceOperation from "@site/static/img/Guide/Service/add_service_operation.png"
import MapActionOutput from "@site/static/img/Guide/Service/map_action_output.png"
import CreateInputOutputArgs from "@site/static/img/Guide/Service/create_input_output_args.png"

<!-- import DefineInputOutput from "@site/static/img/Guide/Service/define_input_output.png" -->

import AddNewOperation from "@site/static/img/Guide/Service/add_new_operation.png"
import CreateServiceId from "@site/static/img/Guide/Service/create_service_id.png"
import CreateNewService from "@site/static/img/Guide/Service/create_new_service.png"
import ServiceOverview from "@site/static/img/Guide/Service/service_overview.png"

# Service (Workflow Abstraction)

import TutorialService from '@site/static/img/tutorial-services.png';

## Video Tutorial

<div class="videoBlock">
    <div class="videoLeft">
        <div class="videoWrapper">
            <a href="../../../Tutorial/#108-abstracting-workflow-with-service-and-intent"><img src={TutorialService} /></a>
        </div>
    </div>
    <div class="videoRight">
        <div class="videoText">
            <a href="../../../Tutorial/#108-abstracting-workflow-with-service-and-intent"><h2><code>108</code> Service (Workflow Abstraction)</h2></a>
            <p>Topics covered</p>
                <ul>
                    <li>Understanding Service</li>
                    <li>Creating Workflow</li>
                    <li>Input and Output schemas</li>
                </ul>
            <p>Duration:  3 mins</p>
        </div>
    </div>
    <div class="videoClearer"></div>
</div>

## What is a Service?

- A service helps the server by taking out commonly used actions into a reusable group.
- A service performs a set of operations and its’ [action](../../actions-library)s.
- A service has an INPUT and an OUTPUT similar to functions in a programming language.

For example, a service to get email from a GMAIL API can be reused by many servers, where the service has multiple actions to accomplish the get email task.

<div class="myResponsiveImg">
    <img src={ServiceOverview} alt="Service Overview" class="myResponsiveImg"/>
</div>

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

### Define the input and output

💡 Behind the scene, [JSON Schema](https://json-schema.org/understanding-json-schema/) is used to perform the input and output validation.

<div class="myResponsiveImg">
    <img src="/apiAutoflow/img/Guide/Service/define_input_output.png" alt="Defining Input and Output" class="myResponsiveImg"/>
</div>

### Create Input and Output arguments

<div class="myResponsiveImg">
    <img src={CreateInputOutputArgs} alt="Creating Input and Output Arguments" class="myResponsiveImg"/>
</div>

💡 Arguments are the keys for the [JSON Schema](https://json-schema.org/understanding-json-schema/) properties. For example, for the below JSON, username and password are the arguments:

```json
    "username": { "type": "string" },
    "password": { "type": "string" },
```

### Add Actions

Refer to the Actions section on how to use Actions.

### Map the Action’s output with the Service operation output

<div class="myResponsiveImg">
    <img src={MapActionOutput} alt="Mapping Action Output" class="myResponsiveImg"/>
</div>

💡 The data stored in the scope variable path output is being mapped to the service’s output

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

Press the Add Version to create a new version.

Click on the trash icon to delete the version.

### Service Data Simulation

Refer to the Data Simulation section for how to use the simulation feature.

<div class="myResponsiveImg">
    <img src={ServiceDataSimulation} alt="Service Data Simulation" class="myResponsiveImg"/>
</div>
