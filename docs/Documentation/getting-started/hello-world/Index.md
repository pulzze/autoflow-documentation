---
sidebar_position: 3
title: Hello World
description:  Hands on hello world documentation
---
import TutorialHelloWorld from '@site/static/img/tutorial-what-is-apiautoflow.jpg';

# Hello World

## Video Tutorial

<div class="videoBlock">
    <div class="videoLeft">
        <div class="videoWrapper">
            <a href="../../../../docs/Tutorial/#102-key-concept-installation-and-hello-world"><img src={TutorialHelloWorld} /></a>
        </div>
    </div>
    <div class="videoRight">
        <div class="videoText">
            <a href="../../../../docs/Tutorial/#102-key-concept-installation-and-hello-world"><h2><code>102</code> Hello World</h2></a>
            <p>Topics covered</p>
                <ul>
                    <li>Define API</li>
                    <li>Create a Server</li>
                </ul>
            <p>Duration:  3 mins</p>
        </div>
    </div>
    <div class="videoClearer"></div>
</div>

## First two steps

There are numerous ways to configure API AutoFlow.  But there are the first two things that you need to do every time you create a new solution.

1. Create an **API**
2. Create a **Server** to host the API 

## Hello World!

Let’s walk through the steps of creating a “Hello World” API. Refer to below for detailed step-by-step instructions.

### Step 1. Create API

1. Create a new API

![picture 1](PIC%201.png)


b. Create an ID for the API.

![Untitled](PIC%202.png)


> 💡 For the Hello World example, we will be using the API AutoFlow provided OpenAPI builder.  However, you can use your own OpenAPI document using the upload feature.


c. Go to the newly created hello_world API and add a new path
![Untitled](PIc%203.0.png)

1. Enter a name for the path, the path you add will be /hello
2. Add a method, select the GET method

![Untitled](PIC%203.1.png)


### Step 2. Create a Server

a. Create a new Server

![Untitled](PIC%203.png)

1. Create an ID for the server.
2. The portnumber by default is 8080, this is customizable. 
> 💡 The server instantly gets hosted on the port number.

3. Press the **Link API** button and select the **hello_world_api**.

![Untitled](PIC%204.png)
![Untitled](PIC%204.1.png)


b. Go to the newly created hello_world_server 

![Untitled](PIC%205.png)


c. Add the API operation

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

![Untitled](PIC%206.png)
![Untitled](PIC%207.png)

d. Add an action(s) to the operation

Click the + Actions button to add an action.
![Untitled](PIC%208.png)

e. Select an action

Use string/join action to join two strings.

![Untitled](PIC%209.png)

f. Add array of string with a delimiter

In our example, we will include to strings **Hello** and **World**, with a space a delimiter

![Untitled](Untitled%2012.png)

> 💡 Note that the OUTPUT of the action is stored in a **variable** called *output*


j. Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

k. Select **Reference / Data** from the data elements

![Untitled](PIC%2011.0.png)


> 💡Make sure that the **string/join** and the **reference data** have the same variable name, in this case it's "output".


### Step 3. Test the API

Congratulations! You have just created a new API server!

![Untitled](PIC%20last.png)

**Download Configuration**

The below example is available for your reference.  Simply download the configuration from below and upload it to your API AutoFlow.

[hello_world_config.json](hello_world_config.json)
