---
title: Conditional Try
sidebar_label: Try
description: Conditional Try examples
image: img/api-autoflow-logo.png
keywords:
  - conditional
  - try
  - action
  - example
---

# Conditional Try Example

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
          <p>Apply TRY condition to the incoming <b>string</b>.</p>
          <ul>
            <li><b>value</b>: upcase the string. The action throws an error if not string.</li>
            <li><b>onError</b>: reply with a message "<b>Error with the input</b>".</li>
          </ul>
          <p>Simulate two test cases</p>
          <ul>
            <li><b>case-normal</b>: with string <code>one</code></li>
            <li><b>case-error</b>: with number <code>1</code></li>
          </ul>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Example Configuration</h4>
          <a target="_blank" href="pathname:///file/sample-conditional-config.json" download><button class="btnDownload">⏬ Download</button></a>
          <p><a href="/docs/Documentation/Guide/Settings/#upload-configuration">Learn how to use</a></p>
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=aiJoS3eM6Jw"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>

<!-- <img src={IfConditionFlow} alt="If Condition Flow" class="myResponsiveImg" width="800px"/> -->

## Supporting Concepts

<details>

<summary>Basic concepts needed for the use case</summary>

| Topic    | Description |
| -------- | ------- |
| [API](../../../Documentation/Examples/API/#1-create-api)  | An API in API AutoFlow is simply an OpenAPI model |
| [Server](../../../Documentation/Examples/API/#2-create-server)  | A server accepts and handles the request and response. |
| [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/)  | Data simulation is a mock data simulated for the purpose of visualizing the data in every step of the workflow. <ul><li>Simulated data is NOT the real data but a sample data you create.</li><li>To use real data, use the **Transaction** feature to capture the data you send from Postman or CURL.</li></ul>  |
| [Scope](../../../Documentation/Guide/Workflow/Scope/)    |  A scope is a namespace for variables.    |
| Data Types    | Data types describe the different types or kinds of data that you are gonna store and work with.    |

</details>

<details open>

<summary>Use case specific concepts</summary>

| Topic    | Description |
| -------- | ------- |
| Action <br/>[conditional/TRY](../../../Documentation/actions-library/flow/conditional/action-conditional-try/)    | Returns values that fits the condition.  |
| Action <br/>[string/upcase](../../../Documentation/actions-library/data/string/action-string-upcase/)    | Returns a string where converts all characters in the given string to uppercase.    |

</details>


## Details

Send JSON object with a key `data` with value in a string or a number over HTTP request body.

```json
{ "data": "one"}
```

```json
{ "data": 1}
```

The goal of the operation is to run a conditional logic:

- #### Try running the logic.

An action is added to perform a string upcase. 

For example, if the input string is `one`, the output is

```yaml
ONE
```

- #### on Error

If the try gives exception error, **onError** returns

```yaml
Error with the input.
```

## Content


### Step 1: Create an API endpoint

Go to the API section and create a new API.
- Name: `sample-conditional`

:::tip Required Concepts
Learn how to create a [API](../../../Documentation/Examples/API/#1-create-api). 
:::

<!-- <img src={CreateApiPath} alt="Create API Path" class="myResponsiveImg" width="500px"/> -->

- Path: `/try`
- Method: <span class="method post">POST</span>

### Step 2. Create a Server Operation
:::tip Required Concepts
Learn how to create a [Server](../../../Documentation/Examples/API/#2-create-server). 
:::

#### Create a Server
<!-- <img src={CreateServer} alt="Create Server" class="myResponsiveImg" width="500px"/> -->


- Server ID: `sample-conditional`
- Port Number: `1112`  Feel free to select your own port number
- Linked API: `sample-conditional`  (select the API you created above)

#### Create a Server Operation

<!-- <img src={CreateServerOperation} alt="Create Server Operation" class="myResponsiveImg" width="550px"/> -->

- Press the "Add API Operation"
- Select the API endpoint created above

### Step 3 : Create Data Simulation for the two conditions

:::tip Required Concepts
Learn how to create a [Simulation](../../../Documentation/Guide/Workflow/INPUT-Simulation/). 
:::

#### Case 1

- **ID**: `case-normal`
- **Request Body**: 

  <u>string</u>

  ```js
  "one"
  ```

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

#### Case 2

- **ID**: `case-error`
- **Request Body**: 

  <u>number</u>

  ```js
  1
  ```
<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


## Add Actions to the Flow

### Step 4 : Add TRY Conditional

:::tip Required Concepts
Learn how to create a [conditional/TRY](../../../Documentation/actions-library/flow/conditional/action-conditional-try/) . 
:::

<!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->

- ### value : Try this first

    - ### Upcase the values

        #### Configure String Upcase action

        Upcasing the data in the variable **request**: `body`. 


        <!-- <img src={SelectSimulation} alt="Select Simulation" class="myResponsiveImg" width="800px"/> -->


- ### onError

  Assign the **Return** as a string value and input `Error with the input.`


### Step 6 : Map the HTTP response with the New Variable

Both iteration action and HTTP response body are set to **variables**: `output`, there's no change that needs to be made

<!-- <img src={HttpResponseCapitalized} alt="Http Response Capitalized" class="myResponsiveImg" width="400px"/> -->

### Step 7 : Test the API with Postman or CURL

Try changing the value to be a string or other data type.

For example  `{"data": "one"}`  vs `{"data": 1}`

#### cURL

```bash
curl --location 'localhost:1112/try' \
--header 'Content-Type: application/json' \
--data '{ "data": "one"}'
```

<!-- <img src={SendPostmanRequest} alt="Send Postman Request" class="myResponsiveImg" width="750px"/> -->

