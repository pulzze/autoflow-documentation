---
sidebar_position: 4
title: PUT 
description: This page you can see how to use API Autoflow with some Examples
---

import put_main from '@site/static/img/example/api/put/01_put_api.png';
import put_main2 from '@site/static/img/example/api/put/02_put_api.png';
import get_main3 from '@site/static/img/example/api/get/03_get_api.png';
import put_main3 from '@site/static/img/example/api/put/03_put_api.png';
import put_main4 from '@site/static/img/example/api/put/04_put_api.png';
import put_main5 from '@site/static/img/example/api/put/05_put_api.png';
import put_main6 from '@site/static/img/example/api/put/06_put_api.png';
import put_main7 from '@site/static/img/example/api/put/07_put_api.png';
import put_main8 from '@site/static/img/example/api/put/08_put_api.png';
import put_main9 from '@site/static/img/example/api/put/09_put_api.png';
import put_main10 from '@site/static/img/example/api/put/10_put_api.png';
import put_main11 from '@site/static/img/example/api/put/11_put_api.png';
import put_main12 from '@site/static/img/example/api/put/12_put_api.png';
import put_main13 from '@site/static/img/example/api/put/13_put_api.png';
import put_main14 from '@site/static/img/example/api/put/14_put_api.png';
import put_main15 from '@site/static/img/example/api/put/15_put_api.png';
import post_main16 from '@site/static/img/example/api/post/16_post_api.gif';
import put_main16 from '@site/static/img/example/api/put/16_put_api.png';
import put_main17 from '@site/static/img/example/api/put/17_put_api.png';
import put_main18 from '@site/static/img/example/api/put/18_put_api.png';
import delete_main16 from '@site/static/img/example/api/delete/16_delete_api.png';
import put_main19 from '@site/static/img/example/api/put/19_put_api.png';
import put_main20 from '@site/static/img/example/api/put/20_put_api.png';



# <span class="method put method-title">PUT</span>

*The HTTP* <span class="method put">PUT</span> *request method creates a new resource or replaces a representation of the target resource with the request payload.*

<hr/>


We already know how to make basic API from <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>
This Page explain How to make <span class="method put">PUT</span> Method API, Update data in database and Get a response from this <span class="method put">PUT</span> API!

:::info Goal
<h3>Add New <span class="method put">PUT</span> Path (in APIs Page) </h3><h3>➡️ Add New <span class="method put">PUT</span> Path (in Server Page).</h3>
:::

As you know, we already made API and Server.<br/>
So, we just add <b>NEW PATH</b> and Add this in <b>Server</b>. in Autoflow<br/>
Follow below steps!

<hr/>

:::note
We will make below <span class="method put">PUT</span> /user/{user_id}<br/>
Then we will update data in Database by <span class="method put">PUT</span> /user/{user_id} with Request Body.
:::

Before Starting, Assuming that <b><a href="/docs/Documentation/Guide/Clients/">Clients</a></b> is already connected, this page will only explain the post method.

## 1. Add New Path with URL Path

We already made Autoflow API and Autoflow Server.<br/>
So we will use this which we made.<br/>
Then just add new <b>Path</b>.
### 1.1 Click Add Path button and write your Path name!

First, we click Add Path button. Then we will write path name. <br/>
And we select <span class="method put">PUT</span> Method.
<img src={put_main} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
You can write <b>URL path Name</b> whatever you want to write.
:::

### 1.2 API page Overview

When you added <b>New path</b>, We can see below new Path.

<span class="method put">PUT</span>

```/user/{user_id}```

<img src={put_main2} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Also, you can make this path by <a href="https://swagger.io/docs/specification/about/">OpenAPI</a> schema on rightside!
:::

<hr/>

## 2. Add New Path in Server!
Let's Add New Path in Server!<br/>
As you know, we already made Server from <a href="/docs/Documentation/Examples/API">API Example Page</a>. <br/>

### 2.1. Click Server Page, Then Click Server Operation!

Click Server Page, then Click Server Operation which we made it before!
<img src={get_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>


### 2.2. Click Add API Operation, Then Click your new Path!

Clic Add API Operation, then Click your new PATH.
<img src={put_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>

Now we can see below screen.<br/>
The api has already been made and completed.<br/>
However, our goal is to send  <span class="method put">PUT</span> ```/user/{user_id}``` with URL PATH and Request Body<br/>
<img src={put_main4} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Now we can use <span class="method put">PUT</span> /user/{user_id} <br/>
:::

<hr/>

## 3. Delete User Data using Action.

Using <span class="method put">PUT</span> ```/user/{user_id} ```<br/> Let's Delete User data in Database! <br/>
To parse Data, we should add Autoflow <b>Action</b>.

### 3.1 Click Add Action button

To add Action, we should click Add action Button.
<img src={put_main5} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.2 Select Action. 

We have lots of <a href="/docs/Documentation/actions-library/">Actions</a> in Autoflow.<br/>
This page, we will use <b> *Database Query* </b> Action.

Select <b> *Database* </b>
<img src={put_main6} alt="Version Location" class="myResponsiveImg" width="800px"/>

Then Select <b> *Query* </b>
<img src={put_main7} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.3 How to use Database Query Action.

:::info
This page's goal is Insert Query in Database from <span class="method put">PUT</span> with *URL PATH* AND *Request Body*.<br/>
I will send <span class="method put">PUT</span> with Request *URL PATH* & *Body*
:::

#### 3.3.1 Select your Client

Select your Client which you connected.<br/>
I will connect 'MySQL' database.

:::tip
If you don't know how to connect Client, <a href="/docs/Documentation/Guide/Clients/">Click here🔗</a>
:::
<img src={put_main8} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.2 Write UPDATE SQL in 'Query'

Our goal is Insert Query in Database from <span class="method put">PUT</span> *URL PATH*. <br/>
Write DELETE QUERY and Select 'Write' in Type.<br/>
I only wrote ```UPDATE `account` SET name =   WHERE id = ;``` <br/>
Becasue I will put Values from <span class="method put">PUT</span> *URL PATH & Request Body*.

<img src={put_main9} alt="Version Location" class="myResponsiveImg" width="800px"/>


#### 3.3.3 Add variable Name which you want.

Write Variable name in Key field.
<img src={put_main10} alt="Version Location" class="myResponsiveImg" width="800px"/>
<img src={put_main11} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.4 Drag param to where you want to Update.

Let's drage <b>*'updated_id'*</b> & <b>*'user_id'*</b> param to where you want to update!

<img src={put_main12} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.5 Click String type in Params

We want to use <span class="method put">PUT</span> URL Path. <br/>
So we will this Variable as one of <span class="method put">PUT</span> URL Path.<br/>
<img src={put_main13} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.6 Change to Data type

Click Data Type.
<img src={put_main14} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.7 Write Path Scope!

We can get <span class="method put">PUT</span> Request Body by ``` request > body > new_name ``` .<br/>
So write path by below.
<img src={put_main15} alt="Version Location" class="myResponsiveImg" width="800px"/>

In the same way, ```user_id``` proceeds the same way.

<img src={put_main16} alt="Version Location" class="myResponsiveImg" width="800px"/>

We can get <span class="method put">PUT</span> URL Path by ``` request > path > user_id ``` .<br/>
So write path by below.

<img src={put_main17} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.8 We are ready to <span class="method put">PUT</span> Request! 👏

<img src={put_main18} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.9 Send Databse query As Response.
I want to  <span class="method put">PUT</span> Response As my database table. <br/>
So, I will Add one more action to response.<br/>
```SELECT * FROM `account`;``` then the QUERY result will be <span class="method put">PUT</span> Response.
<img src={post_main16} alt="Version Location" class="myResponsiveImg" width="800px"/>

<hr/>

## 4. Test <span class="method put">PUT</span> Request and Response

:::info
I will use <a href="https://www.postman.com/"><b>*POSTMAN*</b></a> to <span class="method put">PUT</span> Requset with *URL Path* & *Request Body*.
:::

Before starting my user database is as below.
<img src={delete_main16} alt="Version Location" class="myResponsiveImg" width="600px"/>

### 4.1 <span class="method put">PUT</span> Request with URL Path & Request Body.

First, I will <span class="method put">PUT</span> with *URL Path AND Request Body*.
<span class="method put">PUT</span>

```URL: http://localhost:8080/user/2``` <br/>

Then I got below Response. Now we can see the URL Path user's data was updated in MySQL database.

<img src={put_main19} alt="Version Location" class="myResponsiveImg" width="800px"/>

Second, I will check the result using Action.

Then I got below Response. Now we can see the URL Path user's data was updated in MySQL database.

<img src={put_main20} alt="Version Location" class="myResponsiveImg" width="600px"/>