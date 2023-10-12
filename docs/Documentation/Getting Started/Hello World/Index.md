---
sidebar_position: 3
title: Hello World
description: Hands on hello world documentation
---

import TutorialHelloWorld from '@site/static/img/tutorial-hello-world.png';
import CreateApi from '@site/static/img/Hello_world/create_api.png';
import CreateId from '@site/static/img/Hello_world/create_id.png';
import createPath from '@site/static/img/Hello_world/create_path.png';
import AddPathInfo from '@site/static/img/Hello_world/add_path_info.png';
import CreateNewServer from '@site/static/img/Hello_world/create_new_server.png';
import AddServerInfo from '@site/static/img/Hello_world/add_server_info.png';
import LinkApi from '@site/static/img/Hello_world/link_api.png';
import HelloWorldServer from '@site/static/img/Hello_world/hello_world_server.png';
import AddApiOperation from '@site/static/img/Hello_world/add_api_operation.png';
import ApiOperation from '@site/static/img/Hello_world/api_operation.png';
import AddAction from '@site/static/img/Hello_world/add_action.png';
import JoinString from '@site/static/img/Hello_world/join_string.png';
import AddString from '@site/static/img/Hello_world/add_string.png';
import SelectData from '@site/static/img/Hello_world/select_data.png';
import TestApi from '@site/static/img/Hello_world/test_api.png';

# Hello World

## Video Tutorial

<div class="videoBlock">
    <div class="videoLeft">
        <div class="videoWrapper">
            <a href="../../../Tutorial/#102-key-concept-installation-and-hello-world"><img src={TutorialHelloWorld} /></a>
        </div>
    </div>
    <div class="videoRight">
        <div class="videoText">
            <a href="../../../Tutorial/#102-key-concept-installation-and-hello-world"><h2><code>102</code> Hello World</h2></a>
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

<!-- <div class="myResponsiveImg">
    <img src={CreateApi} alt="Creating A New API" class = "myResponsiveImg"/>
</div> -->

![Create API](@site/static/img/Hello_world/create_api.png)

b. Create an ID for the API.

<div class="myResponsiveImg">
    <img src={CreateId} alt="Creating An ID" class = "myResponsiveImg"/>
</div>

> 💡 For the Hello World example, we will be using the API AutoFlow provided OpenAPI builder. However, you can use your own OpenAPI document using the upload feature.

c. Go to the newly created hello_world API and add a new path

<div class="myResponsiveImg">
    <img src={createPath} alt="Creating A Path" class = "myResponsiveImg"/>
</div>

1. Enter a name for the path, the path you add will be /hello
2. Add a method, select the GET method

<div class="myResponsiveImg">
    <img src={AddPathInfo} alt="Adding Path Info" class = "myResponsiveImg"/>
</div>

### Step 2. Create a Server

a. Create a new Server

<!-- <div class="myResponsiveImg">
    <img src={CreateNewServer} alt="Creating A New Server" class = "myResponsiveImg"/>
</div> -->

![Create Server](@site/static/img/Hello_world/create_new_server.png)

1. Create an ID for the server.
2. The port number by default is 8080, this is customizable.

   > 💡 The server instantly gets hosted on the port number.

3. Press the **Link API** button and select the **hello_world_api**.

<div class="myResponsiveImg">
    <img src={AddServerInfo} alt="Adding Server Info" class = "myResponsiveImg"/>
</div>

<div class="myResponsiveImg">
    <img src={LinkApi} alt="Linking API" class = "myResponsiveImg"/>
</div>

b. Go to the newly created hello_world_server

<!-- <div class="myResponsiveImg">
    <img src={HelloWorldServer} alt="Hello World Server" class = "myResponsiveImg"/>
</div> -->

![Create new Hello World Server](@site/static/img/Hello_world/hello_world_server.png)

c. Add the API operation

Now that you have lined the server with the API, you can start creating the operations for each of the paths.

<!-- <div class="myResponsiveImg">
    <img src={AddApiOperation} alt="Adding API Operation" class = "myResponsiveImg"/>
</div> -->

![Add API Operation](@site/static/img/Hello_world/add_api_operation.png)

<div class="myResponsiveImg">
    <img src={ApiOperation} alt="API Operation" class = "myResponsiveImg"/>
</div>

d. Add an action(s) to the operation

Click the + Actions button to add an action.

<!-- <div class="myResponsiveImg">
    <img src={AddAction} alt="Adding Action" class = "myResponsiveImg"/>
</div> -->

![Add Action](@site/static/img/Hello_world/add_action.png)

e. Select an action

Use string/join action to join two strings.

<div class="myResponsiveImg">
<img src={JoinString} alt="Joining Two Strings" class = "myResponsiveImg"/>
</div>

f. Add an array of string with a delimiter

In our example, we will include to strings **Hello** and **World**, with a space a delimiter

<div class="myResponsiveImg">
    <img src={AddString} alt="Adding String" class = "myResponsiveImg"/>
</div>

> 💡 Note that the OUTPUT of the action is stored in a **variable** called _output_

j. Map data to HTTP response body

For us to test on the web browser, let’s put the string/join action’s output in the HTTP response body.

k. Select **Reference / Data** from the data elements

<div class="myResponsiveImg">
    <img src={SelectData} alt="Selecting Data" class = "myResponsiveImg"/>
</div>

> 💡Make sure that the **string/join** and the **reference data** have the same variable name, in this case, it's "output".

### Step 3. Test the API

Congratulations! You have just created a new API server!

<div class="myResponsiveImg">
    <img src={TestApi} alt="Testing API" class = "myResponsiveImg"/>
</div>

**Download Configuration**

The below example is available for your reference. Simply download the configuration from below and upload it to your API AutoFlow.

&nbsp;<br />

:::note Download This Example

<div>
    <a target="_blank" href="pathname:///file/hello_world_config.json" download>Download</a> the configuration for this example and <a href="../../../Documentation/Guide/Settings/#upload-configuration">upload</a> it to your API AutoFlow
</div>

Learn how to [upload](../../../Documentation/Guide/Settings/#upload-configuration) configuration.
:::