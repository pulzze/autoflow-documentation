---
title: Intent
sidebar_label: Intent
description: Intent helps the server by standardizing the INPUT and OUTPUT of common services.
image: img/api-autoflow-logo.png
keywords:
  - intent
sidebar_class_name: hidden
---

import IntentOverview from '@site/static/img/intent/intent_overview.png';
import CreateNewIntent from '@site/static/img/intent/create_new_intent.png';
import IntentId from '@site/static/img/intent/intent_id.png';
import IntentInputOutput from '@site/static/img/intent/intent_input_output.png';
import Arguments from '@site/static/img/intent/arguments.png';
import AddIntentService from '@site/static/img/intent/add_intent_service.png';
import SelectIntent from '@site/static/img/intent/select_intent.png';
import MapServiceIntent from '@site/static/img/intent/map_service_intent.png';
import SelectExecutionAction from '@site/static/img/intent/select_execution_action.png';
import SelectAction from '@site/static/img/intent/select_action.png';
import ApplyAction from '@site/static/img/intent/apply_action.png';
import StoreValueVariable from '@site/static/img/intent/store_value_variable.png';
import UseIntentServer from '@site/static/img/intent/use_intent_server.png';
import VersionAdd from '@site/static/img/intent/version_add.png';

# Intent (Service Abstraction)

## What is Intent?

Intent helps the server by standardizing the INPUT and OUTPUT of common services.

For example, getting an email is a common intent for all email services.

Instead of the server calling the email services with different inputs and outputs, the services can adopt the intent’s input and output to standardize the call for the servers.

<img src={IntentOverview} alt="Intent Overview" />

## Configuring the Intent

### Create a new Intent

<div class="myResponsiveImg">
    <img src={CreateNewIntent} alt="Create New Intent" class="myResponsiveImg"/>
</div>

### Create an ID for the Intent.

<div class="myResponsiveImg">
    <img src={IntentId} alt="Create ID for Intent" class="myResponsiveImg"/>
</div>

### Define the input and output

💡 Behind the scene, [JSON Schema](https://json-schema.org/understanding-json-schema/) used to perform the input and output validation

<div class="ResponsiveImg">
    <img src={IntentInputOutput} alt="Define Input and Output" width="300px" height="auto"  />
</div>

Create Input and Output arguments

<div class="ResponsiveImg">
    <img src={Arguments} alt="Arguments" 
    width="300px" height="auto" />
</div>

💡 Arguments are the keys for the [JSON Schema](https://json-schema.org/understanding-json-schema/) properties
For example, for the below JSON, username and password are the arguments

```json
    "username_intent": { "type": "string" },
    "password_intent": { "type": "string" },
```

### How to use an Intent

Go to the Server page

### Add an Intent to the Service operation

<div class="ResponsiveImg">
    <img src={AddIntentService} alt="Add Intent to Service" width="300px" height="auto"/>
</div>
Select the intent to use

<div class="myResponsiveImg">
    <img src={SelectIntent} alt="Select Intent" class="myResponsiveImg"/>
</div>

### Map the Service input and output with Intent

<div class="myResponsiveImg">
    <img src={MapServiceIntent} alt="Map Service with Intent" class="myResponsiveImg"/>
</div>

### Applying actions between mapping

## Method 1: Select Execution Action from the Data Element popup

This is used to directly apply the action between the mapping

<div class="myResponsiveImg">
    <img src={SelectExecutionAction} alt="Select Execution Action" class="myResponsiveImg"/>
</div>
Select an action

<div class="ResponsiveImg">
    <img src={SelectAction} alt="Select Action" width="300px" height="auto"/>
</div>
Apply the action

<div class="myResponsiveImg">
    <img src={ApplyAction} alt="Apply Action" class="myResponsiveImg"/>
</div>

## Method 2: Click on the Action button

This is used to create an action that can be used during the mapping.

For example, making a database query and making the data available for use during the mapping.

Store the value in the variable scope for use

<div class="ResponsiveImg">
    <img src={StoreValueVariable} alt="Store Value in Variable" width="300px" height="auto"/>
</div>

### Using Intent from the Server

When selecting the Service operation from the Server, you now have to option to use the intent with the service.

<div class="myResponsiveImg">
    <img src={UseIntentServer} alt="Use Intent from Server" class="myResponsiveImg"/>
</div>

### Versioning the Service

You can version the Service for easier rollback and management.

## Add new version

Press the plus button next to "Version" to create a new version

<div class="myResponsiveImg">
    <img src={VersionAdd} alt="Add New Version" class="myResponsiveImg"/>
</div>
