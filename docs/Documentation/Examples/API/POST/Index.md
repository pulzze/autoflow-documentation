---
sidebar_position: 2
title: POST 
description: This page you can see how to use API Autoflow with some Examples
---

import post_main from '@site/static/img/example/api/post/01_post_api.png';
import post_main2 from '@site/static/img/example/api/post/02_post_api.png';
import get_main3 from '@site/static/img/example/api/get/03_get_api.png';
import post_main3 from '@site/static/img/example/api/post/03_post_api.png';
import post_main4 from '@site/static/img/example/api/post/04_post_api.png';
import post_main5 from '@site/static/img/example/api/post/05_post_api.png';
import post_main6 from '@site/static/img/example/api/post/06_post_api.png';
import post_main7 from '@site/static/img/example/api/post/07_post_api.png';
import post_main8 from '@site/static/img/example/api/post/08_post_api.png';
import post_main9 from '@site/static/img/example/api/post/09_post_api.png';
import post_main10 from '@site/static/img/example/api/post/10_post_api.png';
import post_main11 from '@site/static/img/example/api/post/11_post_api.png';
import post_main12 from '@site/static/img/example/api/post/12_post_api.png';
import post_main13 from '@site/static/img/example/api/post/13_post_api.png';
import post_main14 from '@site/static/img/example/api/post/14_post_api.png';
import post_main15 from '@site/static/img/example/api/post/15_post_api.png';
import post_main16 from '@site/static/img/example/api/post/16_post_api.gif';
import post_main17 from '@site/static/img/example/api/post/17_post_api.png';
import post_main18 from '@site/static/img/example/api/post/18_post_api.png';


# <span class="method post method-title">POST</span>

*The HTTP* <span class="method post">POST</span> *method sends data to the server.* <br/>
*The type of the body of the request is indicated by the Content-Type header..*

<hr/>

We already know how to make basic API from <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>
This Page explain How to make <span class="method post">POST</span> Method API, Add data in database and Get a response from this <span class="method post">POST</span> API!

:::info Goal
<h3>Add New <span class="method post">POST</span> Path (in APIs Page) </h3><h3>➡️ Add New <span class="method post">POST</span> Path (in Server Page).</h3>
:::

As you know, we already made API and Server.<br/>
So, we just add <b>NEW PATH</b> and Add this in <b>Server</b>. in Autoflow<br/>
Follow below steps!

<hr/>

:::note
We will make below <span class="method post">POST</span> /user<br/>
Then we will add data in Database by <span class="method post">POST</span> /user 
:::

Before Starting, Assuming that <b><a href="/docs/Documentation/Guide/Clients/">Clients</a></b> is already connected, this page will only explain the post method.

## 1. Add New Path with URL Path

We already made Autoflow API and Autoflow Server.<br/>
So we will use this which we made.<br/>
Then just add new <b>Path</b>.
### 1.1 Click Add Path button and write your Path name!

First, we click Add Path button. Then we will write path name. <br/>
And we select <span class="method post">POST</span> Method.
<img src={post_main} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
You can write <b>URL path Name</b> whatever you want to write.
:::

### 1.2 API page Overview

When you added <b>New path</b>, We can see below new Path.

<span class="method post">POST</span>

```/user```

<img src={post_main2} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Also, you can make this path by <a href="https://swagger.io/docs/specification/about/">OpenAPI</a> schema on rightside!
:::

<hr/>

## 2. Add New Path in Server!
Let's Add New Path in Server!<br/>
As you know, we already made Server from <a href="/docs/Documentation/Examples/API">API Example Page</a>. <br/>

### 2.1. Click Server Page, Then Click Server Operation!

Click Server Page, then Click Server Operation which we made it before!
<img src={post_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>


### 2.2. Click Add API Operation, Then Click your new Path!

Clic Add API Operation, then Click your new PATH.
<img src={post_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>

Now we can see below screen.<br/>
The api has already been made and completed.<br/>
However, our goal is to send  <span class="method post">POST</span> ```/user ```<br/>
<img src={post_main4} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Now we can use <span class="method post">POST</span> /user <br/>
:::

<hr/>

## 3. Add User Data using Action.

Using <span class="method post">POST</span> ```/user ```<br/> Let's add User data in Database! <br/>
To parse Data, we should add Autoflow <b>Action</b>.

### 3.1 Click Add Action button

To add Action, we should click Add action Button.
<img src={post_main5} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.2 Select Action. 

We have lots of <a href="/docs/Documentation/actions-library/">Actions</a> in Autoflow.<br/>
This page, we will use <b> *Database Query* </b> Action.

Select <b> *Database* </b>
<img src={post_main6} alt="Version Location" class="myResponsiveImg" width="800px"/>

Then Select <b> *Query* </b>
<img src={post_main7} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.3 How to use Database Query Action.

:::info
This page's goal is Insert Query in Database from <span class="method post">POST</span> Request Body.<br/>
I will send <span class="method post">POST</span> Request Body as ```{"name" : "eric"}```
:::

#### 3.3.1 Select your Client

Select your Client which you connected.<br/>
I will connect 'MySQL' database.

:::tip
If you don't know how to connect Client, <a href="/docs/Documentation/Guide/Clients/">Click here🔗</a>
:::
<img src={post_main8} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.2 Write INSERT SQL in 'Query'

Our goal is Insert Query in Database from <span class="method post">POST</span> Request Body. <br/>
Write INSERT QUERY and Select 'Write' in Type.<br/>
I only wrote ```INSERT INTO `account` (`name`) VALUES ;``` <br/>
Becasue I will put Values from <span class="method post">POST</span> Request Body.

<img src={post_main9} alt="Version Location" class="myResponsiveImg" width="800px"/>


#### 3.3.3 Add variable Name which you want.

Write Variable name in Key field.
<img src={post_main10} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.4 Drag param to where you want to insert.

Let's drage <b>*'name'*</b> param to where you want to insert!
<img src={post_main11} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.5 Click String type in Params

We want to use <span class="method post">POST</span> Request Body. <br/>
So we will this Variable as one of <span class="method post">POST</span> Request Body.<br/>
<img src={post_main12} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.6 Change to Data type

Click Data Type.
<img src={post_main13} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.7 Write Path Scope!

We can get <span class="method post">POST</span> Request Body by ``` request > body > name ``` .<br/>
So write path by below.
<img src={post_main14} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.8 We are ready to <span class="method post">POST</span> Request! 👏

<img src={post_main15} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.9 Send Databse query As Response.
I want to  <span class="method post">POST</span> Response As my database table. <br/>
So, I will Add one more action to response.<br/>
```SELECT * FROM `account`;``` then the QUERY result will be <span class="method post">POST</span> Response.
<img src={post_main16} alt="Version Location" class="myResponsiveImg" width="800px"/>

<hr/>

## 4. Test <span class="method post">POST</span> Request and Response

:::info
I will use <a href="https://www.postman.com/"><b>*POSTMAN*</b></a> to <span class="method post">POST</span> Requset with Request Body.
:::

### 4.1 <span class="method post">POST</span> Request with Reqeust body.

First, I will <span class="method post">POST</span> with below body.
<span class="method post">POST</span>

```URL: http://localhost:8080/user``` <br/>
```Body: {"name" : "eric"}``` <br/>

Then I got below Response. Now we can see the Request body data was insterted in MySQL database.

<img src={post_main17} alt="Version Location" class="myResponsiveImg" width="800px"/>

Second, I will one more <span class="method post">POST</span> with below body

<span class="method post">POST</span>

```URL: http://localhost:8080/user``` <br/>
```Body: {"name" : "autoflow"}``` <br/>

Then I got below Response. Now we can see the Request body data was insterted in MySQL database.

<img src={post_main18} alt="Version Location" class="myResponsiveImg" width="800px"/>