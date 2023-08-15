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

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/create_api.png" alt="Creating A New API" class = "myResponsiveImg"/>
</div>


b. Create an ID for the API.

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/create_id.png" alt="Creating An ID" class = "myResponsiveImg"/>
</div>


> 💡 For the Hello World example, we will be using the API AutoFlow provided OpenAPI builder.  However, you can use your own OpenAPI document using the upload feature.


c. Go to the newly created hello_world API and add a new path

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/create_path.png" alt="Creating A Path" class = "myResponsiveImg"/>
</div>


1. Enter a name for the path, the path you add will be /hello
2. Add a method, select the GET method


<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/add_path_info.png" alt="Adding Path Info" class = "myResponsiveImg"/>
</div>


### Step 2. Create a Server

a. Create a new Server


<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/create_new_server.png" alt="Creating A New Server" class = "myResponsiveImg"/>
</div>

1. Create an ID for the server.
2. The portnumber by default is 8080, this is customizable. 
> 💡 The server instantly gets hosted on the port number.

3. Press the **Link API** button and select the **hello_world_api**.


<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/add_server_info.png" alt="Adding Server Info" class = "myResponsiveImg"/>
</div>


<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/link_api.png" alt="Linking API" class = "myResponsiveImg"/>
</div>


b. Go to the newly created hello_world_server 

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/hello_world_server.png" alt="Hello World Server" class = "myResponsiveImg"/>
</div>



c. Add the API operation

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/add_api_operation.png" alt="Adding API Operation" class = "myResponsiveImg"/>
</div>

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/api_operation.png" alt="API Operation" class = "myResponsiveImg"/>
</div>


d. Add an action(s) to the operation

Click the + Actions button to add an action.

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/add_action.png" alt="Adding Action" class = "myResponsiveImg"/>
</div>

e. Select an action

Use string/join action to join two strings.

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/join_string.png" alt="Joining Two Strings" class = "myResponsiveImg"/>
</div>

f. Add array of string with a delimiter

In our example, we will include to strings **Hello** and **World**, with a space a delimiter

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/add_string.png" alt="Adding String" class = "myResponsiveImg"/>
</div>


> 💡 Note that the OUTPUT of the action is stored in a **variable** called *output*


j. Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

k. Select **Reference / Data** from the data elements

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/select_data.png" alt="Selecting Data" class = "myResponsiveImg"/>
</div>


> 💡Make sure that the **string/join** and the **reference data** have the same variable name, in this case it's "output".


### Step 3. Test the API

Congratulations! You have just created a new API server!

<div class="myResponsiveImg">
    <img src="/apiautoflow/img/Hello_world/test_api.png" alt="Testing API" class = "myResponsiveImg"/>
</div>

**Download Configuration**

The below example is available for your reference.  Simply download the configuration from below and upload it to your API AutoFlow.

[hello_world_config.json](hello_world_config.json)
