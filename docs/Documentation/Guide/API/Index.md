---
sidebar_position: 2
---
# 1. Plan the API

## OpenAPI model

An [API](./Index.md) in API AutoFlow is simply an OpenAPI model.   You don’t need to be an expert in OpenAPI.  API AutoFlow provides an easy-to-use graphic-based API builder.

&gt; **A Server is configured to perform what is defined in the API.**
&gt; 

![General API](https://github.com/pulzze/autoflow-documentation/assets/85649767/4a3a9b1d-467b-4766-abeb-2ade00e4fbed)


Read more about [OpenAPI specifications](https://swagger.io/docs/specification/about/) (previously [Swagger](https://swagger.io/))

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

![pic 2](https://github.com/pulzze/autoflow-documentation/assets/85649767/074ef2ae-45c1-46b6-844d-ed9d422a084d)

### Create an ID for the API or Upload OpenAPI document

![pic 3](https://github.com/pulzze/autoflow-documentation/assets/85649767/685c9656-9277-4c8a-8ec0-e1664e54fc71)

&lt;aside&gt;
💡 For this example, we will be using the API AutoFlow provided OpenAPI builder.  However, you can use your own OpenAPI document using the upload feature.

&lt;/aside&gt;

Enter the API title and description

![pic 4](https://github.com/pulzze/autoflow-documentation/assets/85649767/782d1c7a-7f13-4497-a0cf-5c7b61c07bc2)


### Create a Path

Go to the newly created test API and create a new path, choose a proper name for the path. The path you create will be `/hello`

![pic 6](https://github.com/pulzze/autoflow-documentation/assets/85649767/af5164ea-835b-48c4-8b3f-90a7b687dd98)



### Add a field

Field refers to the API method. As shown in the picture above, the chosen field for this API is a GET method. 


## How to use an API

### in a Server

a. Create a Server.  

[Link to Server Guide](../Server)


b. Go to the newly created hello_world_server and press the edit button

![pic 7](https://github.com/pulzze/autoflow-documentation/assets/85649767/2f56606a-4dc4-486e-a048-3c74788e4eb6)

c. Press the **Link API** button and select the **hello_world_api**.

    Change the port number to **1234**

![pic 8](https://github.com/pulzze/autoflow-documentation/assets/85649767/43a5f237-0ef5-4149-b64f-fd151822f3f6)


&lt;aside&gt;
💡 The server instantly gets hosted on the new port number.

&lt;/aside&gt;

d. Add the API operation

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

### pic 9

### in a Service

Create a Service.  
[Link to the Service guide](../Service)

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
