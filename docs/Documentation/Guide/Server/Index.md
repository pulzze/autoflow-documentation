---
sidebar_position: 3
---
# 2. Serve the API

## What is a **Server**

A server accepts and handles the request and response.

&gt; **A Server is configured to host the paths defined in the API.**
&gt; 

For example, HTTP(S) server is configured with a port number and TLS for secured connections. A server hosts multiple operations and performs the actions to generate the desired outcome.

## Configuring a Server

### Create a new Server

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%206.png)

Create an ID for the server.

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%207.png)

Start the server

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%208.png)

### **Define the Server Info**

- Title:		Name the server
- Description:	Description of the server
- Port:		Port number (note that the port number gets applied in real-time)
- Linked API:	Link the API that was created in the API Section

[https://lh4.googleusercontent.com/Rv0aH28V0JrgPWjTN1HoSFL0PKVqQYfAt2vjEJpwHz3hvjV52iBN00bSc6CSeUvGkno4n1IO2R9ZGfrEyNMxmqnGMCY-619HwQDPdSTerltChxlkgSgBRF31VFOXlaYWDQBN1-6OE5IHMlJ-pRmXRX8H6NE-8tx30H0EbV5ma25sLqN3nxHiWoY5NQ](https://lh4.googleusercontent.com/Rv0aH28V0JrgPWjTN1HoSFL0PKVqQYfAt2vjEJpwHz3hvjV52iBN00bSc6CSeUvGkno4n1IO2R9ZGfrEyNMxmqnGMCY-619HwQDPdSTerltChxlkgSgBRF31VFOXlaYWDQBN1-6OE5IHMlJ-pRmXRX8H6NE-8tx30H0EbV5ma25sLqN3nxHiWoY5NQ)

### Add API operations

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%2011.png)

### Add an action(s)

Refer to the [Action section](../../actions-library) on how to use Actions

![Untitled](Untitled.png)

&lt;aside&gt;
💡 Note that the OUTPUT of the action is stored in a **variable** called *output*

&lt;/aside&gt;

### Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

![pic 1](https://github.com/pulzze/autoflow-documentation/assets/85649767/755c11ad-48b3-4950-bae1-6ad55cd32a91)


Select **Reference / Data** from the data elements

![pic 2](https://github.com/pulzze/autoflow-documentation/assets/85649767/45205d6a-3f34-4f43-9e7a-0807d1829b21)

Change the **variables** reference

## How to call a server

![Untitled](@site/docs/Documentation/Getting Started/Hello World/Untitled%2017.png)

Enable Log (Server)

Server Operation

- Simulate
- Delete
- Enable Log
- Enable Capture

Exceptions

Server Security
