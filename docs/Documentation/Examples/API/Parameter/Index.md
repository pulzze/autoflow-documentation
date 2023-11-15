---
sidebar_position: 2
title: Parameter
description: This page you can see how to use API in Autoflow.
---

import param01 from '@site/static/img/example/api/parameter/01_parameter_api.png';
import param02 from '@site/static/img/example/api/parameter/02_parameter_api.png';
import param03 from '@site/static/img/example/api/parameter/03_parameter_api.png';
import param04 from '@site/static/img/example/api/parameter/04_parameter_api.png';
import param05 from '@site/static/img/example/api/parameter/05_parameter_api.png';
import param06 from '@site/static/img/example/api/parameter/06_parameter_api.png';
import param07 from '@site/static/img/example/api/parameter/07_parameter_api.png';
import param08 from '@site/static/img/example/api/parameter/08_parameter_api.png';
import param09 from '@site/static/img/example/api/parameter/09_parameter_api.png';
import param10 from '@site/static/img/example/api/parameter/10_parameter_api.png';
import param11 from '@site/static/img/example/api/parameter/11_parameter_api.png';
import param12 from '@site/static/img/example/api/parameter/12_parameter_api.png';
import param13 from '@site/static/img/example/api/parameter/13_parameter_api.png';
import param14 from '@site/static/img/example/api/parameter/14_parameter_api.png';
import param15 from '@site/static/img/example/api/parameter/15_parameter_api.png';
import param16 from '@site/static/img/example/api/parameter/16_parameter_api.png';
import param17 from '@site/static/img/example/api/parameter/17_parameter_api.png';
import param18 from '@site/static/img/example/api/parameter/18_parameter_api.png';
import param19 from '@site/static/img/example/api/parameter/19_parameter_api.png';
import param20 from '@site/static/img/example/api/parameter/20_parameter_api.png';
import param21 from '@site/static/img/example/api/parameter/21_parameter_api.png';
import param22 from '@site/static/img/example/api/parameter/22_parameter_api.png';
import param23 from '@site/static/img/example/api/parameter/23_parameter_api.png';
import param24 from '@site/static/img/example/api/parameter/24_parameter_api.png';

# Parameter

*Parameters are one of the essential components of the HTTP protocol, which is an optional entity but can be used in combination for various purposes.*

<hr/>

We already know how to make basic API from the <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>
This Page explains How to use API <b>*Parameter*</b> with <span class="method get">GET</span> Example!<br/>

:::info Goal
<h3>Add New <span class="method get">GET</span> Path (in APIs Page) </h3><h3>➡️ Add New <span class="method get">GET</span> Path (in Server Page).</h3>
:::

As you know, we already made API and Server.<br/>
So, we just add the <b>NEW PATH</b> and Add this in the <b>Server</b> in Autoflow<br/>
Follow the below steps!

:::note
We will make the below <span class="method get">GET</span> method with the URL Parameter. <br/>
<span class="method get">GET</span> /user/&#123;user_info&#125; <br/>
We will send below URL with parameter<br/>
<img src={param01} alt="Version Location" class="myResponsiveImg" width="800px"/> <br/>
Then Getting a query result from Database user who is engineer and living in seoul.
:::

## 1. Add New Path with URL Path

We already made Autoflow API and Autoflow Server.<br/>
So we will use this which we made.<br/>
Then just add new a <b>Path</b> with URL PATH!
### 1.1 Click the Add Path button and write your Path name!

First, we click the Add Path button. <br/>
Then we will write the path name with <b> bracket ```{user_info}``` </b>. <br/>
In ```/user/{user_info}``` , ```{user_info}``` means that you can receive data from <b>*URL Parameters*</b><br/>
And we select the <span class="method get">GET</span> Method.
<img src={param02} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
You can write the <b>URL path Name</b> whatever you want to write.
:::

### 1.2 API page Overview

When you added a <b>New path</b>, We can see below the new Path.

<span class="method get">GET</span>  

```/user/{user_info}```

<img src={param03} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Also, you can make this path by <a href="https://swagger.io/docs/specification/about/">OpenAPI</a> schema on the rightside!
:::

<hr/>

## 2. Add a New Path in the Server!
Let's Add a new path in the Server!<br/>
As you know, we already made a Server from the <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>

### 2.1. Click Server Page, Then Click Server Operation!

Click the Server Page, then Click the Server Operation which we made it before!
<img src={param04} alt="Version Location" class="myResponsiveImg" width="800px"/>


### 2.2. Click Add API Operation, Then Click your new Path!

Click the Add API Operation, then Click your new PATH.
<img src={param05} alt="Version Location" class="myResponsiveImg" width="800px"/>

Now we can see the below screen.<br/>
The API has already been made and completed.<br/>
However, our goal is to send a response using the URL path value.
<img src={param06} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Now we can use <span class="method get">GET</span> /user/&#123;user_info&#125; <br/>
:::

<hr/>

## 3. Get Response using Action and URL path by API.

We can already receive the URL path through the API. <br/>
Let's process this in Autoflow and getting a query result from database as a response.
To parse Data, we should add Autoflow <b>Action</b>.

## 3.1 Click the Add Action button

To add an action, we should click the Add Action button.
<img src={param07} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.2 Select Action. 

We have lots of <a href="/docs/Documentation/actions-library/">Actions</a> in Autoflow.<br/>
On this page, we will use <b> *Database Query* </b> Action.

Select <b> *Database* </b>
<img src={param08} alt="Version Location" class="myResponsiveImg" width="800px"/>

Then Select <b> *Query* </b>
<img src={param09} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.3 How to use Database Query Action.

:::info
This page's goal is getting a query in the database from the <span class="method get">GET</span> with *parameters*.<br/>
I will send <span class="method get">GET</span> with Request *parameters*.
:::

#### 3.3.1 Select your Client

Select your Client which you connected.<br/>
I will connect 'MySQL' database.

:::tip
If you don't know how to connect Client, <a href="/docs/Documentation/Guide/Clients/">Click here🔗</a>
:::
<img src={param10} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.2 Write SELECT SQL in 'Query'

Our goal is SELECT Query in Database from <span class="method get">PUT</span> *URL Parameters*. <br/>
Write SELECT QUERY and Select 'read' in Type.<br/>
I only wrote ```SELECT `name` FROM `account` WHERE job =  AND city =;``` <br/>
Because I will put the values from <span class="method get">GET</span> *URL Parameters*.

<img src={param11} alt="Version Location" class="myResponsiveImg" width="800px"/>


#### 3.3.3 Add a Variable Name.

Write the variable name in the Key field.
<img src={param12} alt="Version Location" class="myResponsiveImg" width="600px"/> 
<img src={param13} alt="Version Location" class="myResponsiveImg" width="600px"/>

#### 3.3.4 Drag the Params to where you want to SELECT.

Let's drag the <b>*'job'*</b> and <b>*'city'*</b> params to where you want to SELECT!

<img src={param14} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.5 Click String type in Params

We want to use the <span class="method get">GET</span> URL Parameter. <br/>
So we will use this variable as one of the <span class="method get">GET</span> URL Parameter.<br/>
<img src={param15} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.6 Change to Data Type

Click Data Type.
<img src={param16} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.7 Write Path Scope!

We can get <span class="method get">GET</span> Request query parameter by ``` request > query > city ```.<br/>
So write the path below.
<img src={param17} alt="Version Location" class="myResponsiveImg" width="800px"/>

In the same way, ```job``` proceeds the same way.

<img src={param18} alt="Version Location" class="myResponsiveImg" width="800px"/>

We can get <span class="method get">GET</span> URL Path by ``` request > query > job ``` .<br/>
So write path by below.

<img src={param19} alt="Version Location" class="myResponsiveImg" width="800px"/>

<img src={param20} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.8 We are ready to <span class="method get">GET</span> Request! 👏

<img src={param21} alt="Version Location" class="myResponsiveImg" width="800px"/>

## 4. Test <span class="method get">GET</span> Request and Response

:::info
I will use <a href="https://www.postman.com/"><b>*POSTMAN*</b></a> to <span class="method get">GET</span> request with the *URL parameter* & *Request Body*.
:::

Before starting my user database is as below.

| id | name  | city     | job      |
|----|-------|----------|----------|
| 1  | eric  | seoul    | engineer |
| 2  | bobby | seoul    | engineer |
| 3  | los   | seoul    | designer |
| 4  | bob   | newyork  | account  |
| 5  | eric  | montreal | lawer    |

### 4.1 <span class="method get">GET</span> Request with URL Parameter.

First, I will <span class="method get">GET</span> with *URL Parameter*.
<span class="method get">GET</span>

```URL: http://localhost:8080/user/hello?job=engineer&city=seoul``` <br/>

Then I get the below response. Now we can see the URL Path user's data was updated in the MySQL database.

<img src={param22} alt="Version Location" class="myResponsiveImg" width="800px"/>

Second, I will check the result using Action.

Then I got the below response. Now we can see the URL Path user's data was updated in the MySQL database.

<img src={param23} alt="Version Location" class="myResponsiveImg" width="700px"/>

Also, If you click Simulation, you can see your data like below.

:::tip 
You don't know how to use ```Simulation``` in Autoflow? <br/>
Then, <a href="/docs/Documentation/Guide/Workflow/INPUT-Simulation/">Click here! 🔗</a>
:::

<img src={param24} alt="Version Location" class="myResponsiveImg" width="500px"/>