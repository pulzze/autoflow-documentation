---
sidebar_position: 3
---
# 2. Serve the API

## What is a **Server**

A server accepts and handles the request and response.

> **A Server is configured to host the paths defined in the API.**

For example, HTTP(S) server is configured with a port number and TLS for secured connections. A server hosts multiple operations and performs the actions to generate the desired outcome.

## Configuring a Server

* Create a new Server


![Alt text](image.png)

* Create an ID for the server.

![created_id](../../getting-started/hello-world/Untitled7.png)

* Start the server

![Untitled](../../getting-started/hello-world/Untitled8.png)

### **Define the Server Info**

- Title: Name the server
- Description: Description of the server
- Port: Port number (note that the port number gets applied in real-time)
- Linked API: Link the API that was created in the API Section

![image](https://lh4.googleusercontent.com/Rv0aH28V0JrgPWjTN1HoSFL0PKVqQYfAt2vjEJpwHz3hvjV52iBN00bSc6CSeUvGkno4n1IO2R9ZGfrEyNMxmqnGMCY-619HwQDPdSTerltChxlkgSgBRF31VFOXlaYWDQBN1-6OE5IHMlJ-pRmXRX8H6NE-8tx30H0EbV5ma25sLqN3nxHiWoY5NQ)

### Add API operations

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

![Untitled](../../getting-started/hello-world/Untitled11.png)

### Add an action(s)

Refer to the [Action section](../../actions-library) on how to use Actions

![Untitled](Untitled.png)

<aside>
💡 Note that the OUTPUT of the action is stored in a **variable** called *output*
</aside>

### Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

![pic 1](https://github.com/pulzze/autoflow-documentation/assets/85649767/755c11ad-48b3-4950-bae1-6ad55cd32a91)

Select **Reference / Data** from the data elements

![pic 2](https://github.com/pulzze/autoflow-documentation/assets/85649767/45205d6a-3f34-4f43-9e7a-0807d1829b21)

Change the **variables** reference

## How to call a server

In order to call a server, it is necessary to know the port number assigned to that server. If the server hosting the API is running on the local computer, the domain name would be localhost. The port number used to access the resource on the server would be the one that was assigned to the server during its configuration.

For instance, in our “Hello World” example, we assigned the port number 1234 to our server. This means that we can access the server using the following address: 

![Untitled](../../getting-started/hello-world/Untitled17.png)



Continued reading on this topic includes: 

Enable Log (Server)

Server Operations:
- Simulate
- Delete
- Enable Log
- Enable Capture

Exceptions

Server Security
