---
sidebar_position: 2
---
# 1. Plan the API

## OpenAPI model

An [API](../notion://www.notion.so/Main-Concept-c4e952b2621349408d60b75788032f48#_6adccgfb6552) in API AutoFlow is simply an OpenAPI model.   You don’t need to be an expert in OpenAPI.  API AutoFlow provides an easy-to-use graphic-based API builder.

&gt; **A Server is configured to perform what is defined in the API.**
&gt; 

![Untitled](Untitled.png)

Read more about [OpenAPI specifications](../https://swagger.io/docs/specification/about/) (previously [Swagger](../https://swagger.io/))

The API is used by many features in the API AutoFlow.  But, it always plays the same role as an API describing the format for REST APIs and validating the API calls.

### **When used by a Server**

API describes how the server would receive the API calls

This would be your server APIs

### **When used by a Service**

API describes how the service would receive the API calls

This would be your cloud vendor APIs. For example Gmail API

&lt;aside&gt;
💡 At a high level, you can understand that API used in the [Server](../Server) is for external access and the [Service](../Service) is for internal access.

&lt;/aside&gt;

## Configuring the API

### Create a new API

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled.png)

### Create an ID for the API - Upload OpenAPI document

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%201.png)

&lt;aside&gt;
💡 For the Hello World example, we will be using the API AutoFlow provided OpenAPI builder.  However, you can use your own OpenAPI document using the upload feature.

&lt;/aside&gt;

Enter the API title and description

![Untitled](Untitled%201.png)

### Create a Path

Go to the newly created hello_world API and create a new path

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%202.png)

Enter a name for the path

The path you create will be `/hello`

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%203.png)

### Add a field

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%204.png)

g. Select the GET method

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%205.png)

## How to use an API

### in a Server

a. Create a Server.  

Refer to how to create a server

b. Go to the newly created hello_world_server and press the edit button

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%209.png)

c. Press the **Link API** button and select the **hello_world_api**.

    Change the port number to **1234**

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%2010.png)

&lt;aside&gt;
💡 The server instantly gets hosted on the new port number.

&lt;/aside&gt;

d Add the API operation

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%2011.png)

### in a Service

Create a Service.  Refer to how to create a service

In the example below, we have created

- Input with argument **username** accepting an only string
- Output with argument **name_filtered** responding as a string

a. Add a new Action

![Untitled](Untitled%202.png)

c. Select the API Operations Action

![Untitled](Untitled%203.png)

d. Click the **Choose an API Operation** button and select the **path**

![Untitled](Untitled%204.png)

e. The parameters will auto-populate based on the information in the OpenAPI.

But you can always overwrite the information.

![Untitled](Untitled%205.png)

&lt;aside&gt;
💡 Note that the result of the API call will get stored in a **variable** called *output.*
Click the button labeled [**variable** *output*] to change where you would like to store the data.

&lt;/aside&gt;