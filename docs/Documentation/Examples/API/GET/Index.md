---
sidebar_position: 1
title: GET 
description: This page you can see how to use API Autoflow with some Examples
---

import get_main from '@site/static/img/example/api/get/01_get_api.png';
import get_main2 from '@site/static/img/example/api/get/02_get_api.png';
import get_main3 from '@site/static/img/example/api/get/03_get_api.png';
import get_main4 from '@site/static/img/example/api/get/04_get_api.png';
import get_main5 from '@site/static/img/example/api/get/05_get_api.png';
import get_main6 from '@site/static/img/example/api/get/06_get_api.png';
import get_main7 from '@site/static/img/example/api/get/07_get_api.png';
import get_main8 from '@site/static/img/example/api/get/08_get_api.png';
import get_main9 from '@site/static/img/example/api/get/09_get_api.png';
import get_main10 from '@site/static/img/example/api/get/10_get_api.png';
import get_main11 from '@site/static/img/example/api/get/11_get_api.png';
import get_main12 from '@site/static/img/example/api/get/12_get_api.png';
import get_main13 from '@site/static/img/example/api/get/13_get_api.png';
import get_main14 from '@site/static/img/example/api/get/14_get_api.png';
import get_main15 from '@site/static/img/example/api/get/15_get_api.png';
import get_main16 from '@site/static/img/example/api/get/16_get_api.png';


# <span class="method get method-title">GET</span>

*The HTTP* <span class="method get">GET</span> *method requests a representation of the specified resource.*  <br/>
*Requests using GET should only be used to request data (they shouldn't include data).*

<hr/>

We already know how to make basic <span class="method get">GET</span> Method from <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>
This Page explain How to make <span class="method get">GET</span> Method API with <b> *URL Path* </b>  and Get a response from this API!

:::info
<h3>Add New <span class="method get">GET</span> Path (in APIs Page) </h3><h3>➡️ Add New <span class="method get">GET</span> Path (in Server Page).</h3>
:::

As you know, we already made API and Server.<br/>
So, we just add <b>NEW PATH</b> and Add this in <b>Server</b>. in Autoflow<br/>
Follow below steps!

<hr/>

:::note
We will make below <span class="method get">GET</span> method with URL path. <br/>
<span class="method get">GET</span> /my/&#123;name&#125; <br/>
Then we will get a response "Oh! Your name is &#123;name&#125;" from this API.
:::

## 1. Add New Path with URL Path

We already made Autoflow API and Autoflow Server.<br/>
So we will use this which we made.<br/>
Then just add new <b>Path</b> with URL PATH!
### 1.1 Click Add Path button and write your Path name!

First, we click Add Path button. <br/>
Then we will write path name with <b> balcket ```{name}``` </b>. <br/>
In ```/my/{name}``` , ```{name}``` means that you can receive the path you want as the path of url.<br/>
And we select <span class="method get">GET</span> Method.
<img src={get_main} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
You can write <b>URL path Name</b> whatever you want to write.
:::

### 1.2 API page Overview

When you added <b>New path</b>, We can see below new Path.

<span class="method get">GET</span>  

```/my/{name}```

<img src={get_main2} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Also, you can make this path by <a href="https://swagger.io/docs/specification/about/">OpenAPI</a> schema on rightside!
:::

<hr/>

## 2. Add New Path in Server!
Let's Add New Path in Server!<br/>
As you know, we already made Server from <a href="/docs/Documentation/Examples/API"> API Example Page</a>. <br/>

### 2.1. Click Server Page, Then Click Server Operation!

Click Server Page, then Click Server Operation which we made it before!
<img src={get_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>


### 2.2. Click Add API Operation, Then Click your new Path!

Clic Add API Operation, then Click your new PATH.
<img src={get_main4} alt="Version Location" class="myResponsiveImg" width="800px"/>

Now we can see below screen.<br/>
The api has already been made and completed.<br/>
However, our goal is to send a response using the URL path value.
<img src={get_main5} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
Now we can use <span class="method get">GET</span> /my/&#123;name&#125; <br/>
:::

<hr/>

## 3. Get Response using Action and URL path by API.

We can already receive the URL path through the API. <br/>
Let's process this in Autoflow and send "Oh! Your name is {name}!" as a response.
To parse Data, we should add Autoflow <b>Action</b>.

### 3.1 Click Add Action button

To add Action, we should click Add action Button.
<img src={get_main6} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.2 Select Action. 

We have lots of <a href="/docs/Documentation/actions-library/">Actions</a> in Autoflow.<br/>
This page, we will use <b> *String Interpolate* </b> Action.

Select <b> *String* </b>
<img src={get_main7} alt="Version Location" class="myResponsiveImg" width="800px"/>

Then Select <b> *Interpolate* </b>
<img src={get_main8} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 3.3 How to use String Interpolate Action.

#### 3.3.1 Write message, and click Add variable button
Write below message *("Oh Your name is")* which you want to get, <br/>
Then Add <b>'variable'</b> button.
<img src={get_main9} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.2 Add variable Name which you want.

Write Variable name in Key field.
<img src={get_main10} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.3 Click String type

We want to use URL Path to response. So we will this Variable as URL Path.
<img src={get_main11} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.3 Change to Data type

Click Data Type.
<img src={get_main12} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.4 Write Path Scope!

We can get URL Path by ``` request > path > name ``` .<br/>
So write path by below.
<img src={get_main13} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### 3.3.5 Drag your variable!

Drag your variable in anywhere you want.
<img src={get_main14} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### We are ready to get Response 👏

<hr/>

## 4. Test <span class="method get">GET</span> Response

Now, we can get a response with URL Path.

<span class="method get">GET</span>  

```http://localhost:8080/my/Eric```

<img src={get_main15} alt="Version Location" class="myResponsiveImg" width="800px"/>
<hr/>
<span class="method get">GET</span>  

```http://localhost:8080/my/Autoflow```

<img src={get_main16} alt="Version Location" class="myResponsiveImg" width="800px"/>
