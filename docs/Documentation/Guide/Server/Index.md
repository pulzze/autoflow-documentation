---
sidebar_position: 3
---

import TestApi from "@site/static/img/hello_world/test_api.png"
import VariableOutput from "@site/static/img/guide/Server/variable-output.png"
import ApiOperation from "@site/static/img/hello_world/api_operation.png"
import AddServerInfo from "@site/static/img/hello_world/add_server_info.png"
import CreateNewServer from "@site/static/img/guide/Server/create-new-server.png"

# Server

## What is a **Server**

A server accepts and handles the request and response.

> **A Server is configured to host the paths defined in the API.**

For example, HTTP(S) server is configured with a port number and TLS for secured connections. A server hosts multiple operations and performs the actions to generate the desired outcome.

## Configuring a Server

- Create a new Server

<div class="myResponsiveImg">
    <img src={CreateNewServer} alt="Creating A New Server" class = "myResponsiveImg"/>
</div>

- Create an ID for the server.

<div class="myResponsiveImg">
    <img src={AddServerInfo} alt="Adding Server Info" class = "myResponsiveImg"/>
</div>

### **Define the Server Info**

- Title: Name the server
- Description: Description of the server
- Port: Port number (note that the port number gets applied in real-time)
- Linked API: Link the API that was created in the API Section

<img src="https://lh4.googleusercontent.com/Rv0aH28V0JrgPWjTN1HoSFL0PKVqQYfAt2vjEJpwHz3hvjV52iBN00bSc6CSeUvGkno4n1IO2R9ZGfrEyNMxmqnGMCY-619HwQDPdSTerltChxlkgSgBRF31VFOXlaYWDQBN1-6OE5IHMlJ-pRmXRX8H6NE-8tx30H0EbV5ma25sLqN3nxHiWoY5NQ" alt="Defining Server Info" class = "myResponsiveImg"/>

### Add API operations

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

<div class="myResponsiveImg">
    <img src={ApiOperation} alt="API Operation" class = "myResponsiveImg"/>
</div>

### Add an action(s)

Refer to the [Action section](../../actions-library) on how to use Actions

<img src={VariableOutput} alt="Storing Output" />

> 💡 Note that the OUTPUT of the action is stored in a **variable** called _output_

### Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

<img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/755c11ad-48b3-4950-bae1-6ad55cd32a91" alt="Select Data" class = "myResponsiveImg"/>

Select **Reference / Data** from the data elements

<img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/45205d6a-3f34-4f43-9e7a-0807d1829b21" alt="Variables" class = "myResponsiveImg"/>

Change the **variables** reference

## How to call a server

In order to call a server, it is necessary to know the port number assigned to that server. If the server hosting the API is running on the local computer, the domain name would be localhost. The port number used to access the resource on the server would be the one that was assigned to the server during its configuration.

For instance, in our “Hello World” example, we assigned the port number 1234 to our server. This means that we can access the server using the following address:

<div class="myResponsiveImg">
    <img src={TestApi} alt="Testing API" class = "myResponsiveImg"/>
</div>

<!-- Continued reading on this topic includes:

Enable Log (Server)

Server Operations:
- Simulate
- Delete
- Enable Log
- Enable Capture

Exceptions

Server Security -->
