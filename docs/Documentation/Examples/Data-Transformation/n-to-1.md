---
sidebar_position: 4
title: Data Normalization N to 1
sidebar_label: N to 1
description: Transform log from multiple sources into a standardized format
image: img/api-autoflow-logo.png
keywords:
  - data normalization
  - data transformation
---

import n_to_1_example from '@site/static/img/example/data-transformation/n-to-1/example.png';
import create_service from '@site/static/img/example/data-transformation/n-to-1/create-service.jpg';
import data_simulation from '@site/static/img/example/data-transformation/n-to-1/data-simulation.jpg';
import data_simulation_create from '@site/static/img/example/data-transformation/n-to-1/data-simulation-create.jpg';
import data_simulation_check from '@site/static/img/example/data-transformation/n-to-1/data-simulation-check.jpg';
import condition_switch from '@site/static/img/example/data-transformation/n-to-1/condition-switch.jpg';
import condition_switch_case_1 from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1.jpg';
import condition_switch_case_1_1 from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-1.jpg';
import condition_switch_case_1_string_split from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-string-split.jpg';
import condition_switch_case_1_string_split_check_output from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-string-split-check-output.jpg';
import condition_switch_case_1_string_split_return from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-string-split-return.jpg';
import condition_switch_case_1_return from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-return.jpg';
import condition_switch_case_1_check_output from '@site/static/img/example/data-transformation/n-to-1/condition-switch-case-1-check-output.jpg';
import service_output_mapping from '@site/static/img/example/data-transformation/n-to-1/service-output-mapping.jpg';
import simulation_db_2 from '@site/static/img/example/data-transformation/n-to-1/simulation-db-2.jpg';
import service_operation_config from '@site/static/img/example/data-transformation/n-to-1/service-operation-config.jpg';
import service_operation_check_output from '@site/static/img/example/data-transformation/n-to-1/service-operation-check-output.jpg';


# N to 1

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          Create a <a href="/docs/Documentation/Guide/Service/">Service</a> that receives data in multiple input arguments and processes the data into a common "object" output based on an input criteria.
          <p>In the below example, if the source is "website_user", the name will be split into first and last name. For other case, in the below example source being "service_user", the values from the input will directly inserted into a new object.</p>
        </div>
        <br />
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-data-transformation-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#configuration-management">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=_b3YwFY0qtA"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>

<img src={n_to_1_example} alt="N to 1 example" class="myResponsiveImg" width="800px"/>

## Supporting Concepts


<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [Service](../../../Documentation/Guide/Service/)  | Service is a reusable function <ol><li>Takes in a set of **INPUT** arguments</li><li>Performs set of actions</li><li>Gives out an **OUTPUT**</li></ol> |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types  | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[condition/switch](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/)    | Returns values that fits on switch case. <br />If the input value is not in the case list, it returns the value of default.    |
| Action <br/>[string/split](../../../Documentation/actions-library/data/string/action-string-split/)    | Returns array that divides a string into substrings at each Unicode whitespace occurrence with leading and trailing whitespace ignored.    |

</details>



## Details
The service has 4 inputs:
- source: a string that has a special case if the value is `website_user`
- name: a string that is used in the case that source is `website_user` [example: **John Doe**]
- first: a string that is used if the source is NOT `website_user` [example: **John**]
- last: a string that is used if the source is NOT `website_user` [example: **Doe**]

The goal of the operation is to normalize these 2 scenarios into a single object:
1. `website_user` with name of this format: **John Doe**
2. `service_user` a non-website_user with name in fields first=**John** and last=**Doe**

The return should be an object like:

```js
{
  "first": "John",
  "last": "Doe"
}
```

## Content

### Step 1: Create a new Service and add INPUT/OUTPUT arguments

:::tip Required Concepts
Learn how to create a [Service](../../../Documentation/Guide/Service/) and add new INPUT/OUT arguments. 
:::

We will be passing values in the below INPUT arguments and return the data from below OUTPUT argument.

#### INPUT arguments
- source
- name
- first
- last

#### OUTPUT arguments
- user_obj

<img src={create_service} alt="N to 1 example" class="myResponsiveImg" width="600px"/>

:::note

The service can be called from any workflow using the [service/operation](../../../Documentation/actions-library/call/service/action-service-operation.mdx/) action.

:::


### Step 2. Simulation Mock Data
:::tip Required Concepts
Learn how to [simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/) the mock data. 
:::

#### Add Test Simulation 1: `db_1`
- source: website_user
- name: John Doe
- first:
- last:

<img src={data_simulation_create} alt="N to 1 Simulation Check" class="myResponsiveImg" width="600px"/>

#### Add Test Simulation 2: `db_2`
- first: Peter
- last: Parker
- name:
- source: service_user

<img src={data_simulation} alt="N to 1 Simulation Check" class="myResponsiveImg" width="400px"/>

:::note

The service INPUT arguments that was created in step 1 is what's being used to create the service simulation.

:::

### Step 3 : Add Condition Switch Action
:::tip Required Concepts
Learn how to [add an action](../../../Documentation/actions-library/) and use [condition/switch](../../../Documentation/actions-library/flow/conditional/action-conditional-switch/) actions.
:::
Condition is configured to SWITCH based on INPUT `source` value.

<img src={condition_switch} alt="Condition Switch" class="myResponsiveImg" width="600px"/>


**Configure condition/switch**
- Case 1: If source has **website_user** 
- Default: The source **service_user** will not match any case hence go through the default case.


### Step 4 (Case 1): Apply Actions to Transform the Data

#### 1. Select "db_1" Simulation

If it is not already selected, select the `db_1` from the INPUT Data Simulation.
We will use the simulated data from "db_1" to configure the "CASE 1" in the switch.
<img src={data_simulation_check} alt="N to 1 Simulation Check" class="myResponsiveImg" width="600px"/>


#### 2. Look for the source "website_user"

The first case looks for the value `website_user` in the INPUT `source`

<img src={condition_switch_case_1} alt="Condition Switch Case 1" class="myResponsiveImg" width="600px"/>

#### 3. Apply Action "string/split"
:::tip Required Concepts
Learn how to use [string/split](../../../Documentation/actions-library/data/string/action-string-split/) actions.
:::

If the source has the value `website_user`, it will split the string.
- Select `Action` in the Return.  This will change the "Return" to "Do This"
- Add string/split Action

<img src={condition_switch_case_1_1} alt="Condition Switch Case 1" class="myResponsiveImg" width="600px"/>


#### 4. Configure "string/split"
- **string/split** <br />Source with <b>website_user</b> has the name value <b>John Doe</b>, so we need to split the name into two values.


**Action configuration**
- Split the string in the data INPUT `name`

<img src={condition_switch_case_1_string_split} alt="Condition Switch Case 1" class="myResponsiveImg" width="600px"/>



**Check the Action Output**
:::tip Required Concepts
Learn more about <a href="/docs/Documentation/Guide/Workflow/action/check-output">Check Action Output</a>.
:::

- The OUTPUT of the action is stored in the SCOPE `variable: output` by default. You can assign your own variable if you'd like.
- Press the "Action Output" tab to check that the string `John Doe` is split into an array of `["John", "Doe"]`

<img src={condition_switch_case_1_string_split_check_output} alt="Action Check Output" class="myResponsiveImg" width="600px"/>


#### 5. Create RETURN value as an object


**Return configuration**
- Select `object` as the return data type
- Add keys `first` and `last`
- Map the values to each key

<img src={condition_switch_case_1_string_split_return} alt="Action Return Value" class="myResponsiveImg" width="250px"/>


### Step 5 (CASE DEFAULT): Map Return Value

:::caution
Select simulation "db_1", which has the names in the separate keys "first" and "last"
:::

<img src={simulation_db_2} alt="Data Simulation db_2" class="myResponsiveImg" width="600px"/>

Since the data already has the "first" and "last" as a separate value, we can map the INPUT data directly to the new OUTPUT object.

**Return configuration**
- Select `object` as the return data type
- Add keys `first` and `last`
- Map the values to each key


<img src={condition_switch_case_1_return} alt="Condition Switch Default Return" class="myResponsiveImg" width="300px"/>


#### Check the OUTPUT of Condition/Switch

Notice it is identical to the CASE 1.

<img src={condition_switch_case_1_check_output} alt="Condition Switch Check Output" class="myResponsiveImg" width="500px"/>


### Step 6 : Map the Action and Service OUTPUTs

Finally, you can map the OUTPUT from the workflow to the Service OUTPUT
- Action's OUTPUT were all save to the scope "variable: output"
- Map the Service's OUTPUT `user_obj` with the "variable: output"

<img src={service_output_mapping} alt="Condition Switch Check Output" class="myResponsiveImg" width="600px"/>

:::note Mapping the **action** output to the **HTTP response** output
- Data referenced in HTTP response is what gets sent back to the client. 
- Map the output from the actions to be sent back.

NOTE: By default, the action output is set to variable **output**. If you intend to keep each action's output without it being overwritten by the next action,
simply rename the output location in the action's output.
:::

### Step 7 : Calling the Service using the Service Operation Action
:::tip Required Concepts
Learn how to call services using the <a href="/docs/Documentation/actions-library/call/service/action-service-operation/">Service/Operation</a> action.

Also, you may want to learn how to create a [server](../../../Documentation/Guide/Server) if you wish to call the service using a HTTP server.
:::

Create a [server](../../../Documentation/Guide/Server) and add the <a href="/docs/Documentation/actions-library/call/service/action-service-operation/">Service/Operation</a> action.

#### 1. Select the Service and insert the values

<img src={service_operation_config} alt="Service Operation Configuration" class="myResponsiveImg" width="600px"/>

#### 2. Check the output.

<img src={service_operation_check_output} alt="Service Operation Check Output" class="myResponsiveImg" width="600px"/>

:::note
HTTP server can received data in the Request Body in a JSON format or URL parameters.
Download the example to see how JSON data in request body is used.
::: 