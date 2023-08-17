---
sidebar_position: 2
---

import CreateNewAction from '@site/static/img/Guide/API/create_new_action.png';
import SelectNewOperation from '@site/static/img/Guide/API/select_new_operation.png';
import AddPath from '@site/static/img/Guide/API/add_path.png';
import ApiOperationOverview from '@site/static/img/Guide/API/api_operation_overview.png';

# API

## OpenAPI model

An [API](./Index.md) in API AutoFlow is simply an OpenAPI model. You don’t need to be an expert in OpenAPI. API AutoFlow provides an easy-to-use graphic-based API builder.

**A Server is configured to perform what is defined in the API.**

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/4a3a9b1d-467b-4766-abeb-2ade00e4fbed" alt="General API Configuration"/>
</div>

Read more about [OpenAPI specifications](https://swagger.io/docs/specification/about/) (previously [Swagger](https://swagger.io/))

The API is used by many features in the API AutoFlow. But, it always plays the same role as an API describing the format for REST APIs and validating the API calls.

### **When used to receive API calls**

The OpenAPI is used to determine how to receive the API calls.

For example, the server you create will have various endpoints and parameters. You would first define that in the OpenAPI and then create a server for each of the endpoint operations.

### **When used to make API calls**

The OpenAPI is used to make API calls.

For example, Google published OpenAPI for their cloud services. API AutoFlow provides a convenient way to upload the OpenAPI doc and automatically populate the API call parameters.

> 💡 At a high level, you can understand that OpenAPIs are used both for external and internal API calls.

## Configuring the API

### Create a new API

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/074ef2ae-45c1-46b6-844d-ed9d422a084d" alt="Create New API"/>
</div>

### Create an ID for the API or Upload OpenAPI document

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/685c9656-9277-4c8a-8ec0-e1664e54fc71" alt="API ID Creation"/>
</div>

💡 For this example, we will be using the API AutoFlow provided OpenAPI builder. However, you can use your own OpenAPI document using the upload feature.

Enter the API title and description

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/782d1c7a-7f13-4497-a0cf-5c7b61c07bc2" alt="API Details"/>
</div>

### Create a Path

Go to the newly created test API and create a new path, choose a proper name for the path. The path you create will be `/hello`

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/af5164ea-835b-48c4-8b3f-90a7b687dd98" alt="Creating a Path"/>
</div>

### Add a field

Field refers to the API method. As shown in the picture above, the chosen field for this API is a GET method.

## How to use an API

### in a Server

a. Create a Server.  
[Link to Server Guide](../Server)

b. Go to the newly created hello_world_server and press the edit button

<img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/2f56606a-4dc4-486e-a048-3c74788e4eb6" alt="Editing the API"/>

c. Press the **Link API** button and select the **hello_world_api**.
Change the port number to **1234**

<img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/43a5f237-0ef5-4149-b64f-fd151822f3f6" alt="Linking the API"/>

💡 The server instantly gets hosted on the new port number.

d. Add the API operation
Now that you have lined the server with the API, you can start creating the operations for each of the paths.

### in a Service

Create a Service.  
[Link to the Service guide](../Service)

In the example below, we have created

- Input with argument **username** accepting only a string
- Output with argument **name_filtered** responding as a string

a. Add a new Action

<div class="myResponsiveImg">
    <img src={CreateNewAction} alt="Creating a New Action"/>
</div>

c. Select the API Operations Action

<div class="myResponsiveImg">
    <img src={SelectNewOperation} alt="Selecting New Operation"/>
</div>

d. Click the **Choose an API Operation** button and select the **path**

<div class="myResponsiveImg">
    <img src={AddPath} alt="Adding a Path"/>
</div>

e. The parameters will auto-populate based on the information in the OpenAPI. But you can always overwrite the information.

<div class="myResponsiveImg">
    <img src={ApiOperationOverview} alt="API Operation Overview"/>
</div>

💡 Note that the result of the API call will get stored in a **variable** called _output._ Click the button labeled [**variable** *output*] to change where you would like to store the data.
