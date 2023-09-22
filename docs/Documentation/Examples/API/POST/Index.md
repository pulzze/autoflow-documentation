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

# <span class="method post method-title">POST</span>

*The HTTP* <span class="method post">POST</span> *method sends data to the server.* <br/>
*The type of the body of the request is indicated by the Content-Type header..*

<hr/>

We already know how to make basic API from <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>
This Page explain How to make <span class="method post">POST</span> Method API, Add data in database and Get a response from this <span class="method post">POST</span> API!

:::info
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
<img src={get_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>


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
<!-- <img src={get_main7} alt="Version Location" class="myResponsiveImg" width="800px"/> -->

Then Select <b> *Query* </b>
<!-- <img src={get_main8} alt="Version Location" class="myResponsiveImg" width="800px"/> -->

### 3.3 How to use Database Query Action.
