---
sidebar_position: 1
title: API
description: This page you can see how to use API in Autoflow.
---

import api_main from '@site/static/img/example/api/01_api_create_api.png';
import api_main2 from '@site/static/img/example/api/02_api_create_api.png';
import api_main3 from '@site/static/img/example/api/03_api_create_api.png';
import api_main4 from '@site/static/img/example/api/04_api_create_api.gif';
import api_main5 from '@site/static/img/example/api/05_api_create_api.png';
import api_main6 from '@site/static/img/example/api/06_api_create_api.png';
import api_main7 from '@site/static/img/example/api/07_api_create_api.png';
import server_main from '@site/static/img/example/api/08_server_create_api.png';
import server_main2 from '@site/static/img/example/api/09_server_create_api.png';
import server_main3 from '@site/static/img/example/api/10_server_create_api.gif';
import server_main4 from '@site/static/img/example/api/11_server_create_api.png';
import server_main5 from '@site/static/img/example/api/12_server_create_api.png';
import server_main6 from '@site/static/img/example/api/13_server_create_api.png';

# API
*An application programming interface (API).* <br/>
*On this page you can see how to make API in Autoflow.*
<hr/>

# How to make API in Autoflow? 🤔
Basically, You can make your API with just <b>Two Steps</b>.

:::info Two Step
<h3> Create API ➡️ Create Server </h3>
:::

## 1. Create API
First, you should create API on the API page.<br/>

:::tip
To make API, you should Make API first. Let's See How to make API!
:::

### 1.1. Click the Create button
Click the left button then Click the 'Create New' button.
<img src={api_main} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 1.2. Write the API's name.
Write your API's Name
<img src={api_main2} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
<b>API name</b> Must be at least <b> 2 </b> characters.<br/>
Also, ID may only <b> contain lowercase letters, numbers, hyphens, and underscores</b>.
:::

When you create API, you can see below screen.
<img src={api_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 1.3. Click your API
You can delete API here.<br/>
Also, When you click API Operation,
<img src={api_main4} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 1.4. API page overview
You can make an API Path by UI or Using OpenAPI.
<img src={api_main5} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
If you want to know how to write OpenAPI schema, You can see <a href="https://swagger.io/docs/specification/about/">here.</a>
:::

### 1.5. Add API Path

Click the <b>Add Path</b> button,<br/>
then write the <b>Path name</b>, then Select the <b>Method</b> that want to make.
<img src={api_main6} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 1.6 Add Information or Response (Optional)

When you add Path, basically when you make <b>Path</b>, this page is done. <br/>

<img src={api_main7} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
But, If you want to write description of this API's Path,<br/>
You can write Additional Infomation, you should Click <b>Info</b>, <br/>
Also, If you want to make response, you can Add <b>Responses</b> by clicking the <b>Responses</b> button.
:::

<hr/>

## 2. Create Server

Second, when you finished making the API, you should create a <b>Server</b> on the Server page.<br/>
Let's See How to make API on the Server Page!


### 2.1. Click the create button

Click the left button then Click the 'Create New' button.
<img src={server_main} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 2.2. Write Server Name

Write your <b>Server's Name</b> and <b>Port Number</b>.<br/>
Then you must select your <b>'API'</b> which you made from Step 1.

<img src={server_main2} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
The <b>Server name</b> Must be at least <b> 2 </b> characters.<br/>
Also, ID may only <b> contain lowercase letters, numbers, hyphens, and underscores </b>.
:::

### 2.3. Click your Server

You can <b>Delete the Server</b> here. Also, You can <b>Stop the Server.</b><br/>
When you click Server Operation,
<img src={server_main3} alt="Version Location" class="myResponsiveImg" width="800px"/>

### 2.4. Add API Operation

Click the <b>Add API Operation</b> Button, then Select the <b>API</b> that made from Step 1.
<img src={server_main4} alt="Version Location" class="myResponsiveImg" width="800px"/>


### 2.5. Overview Server

When you see the below screen, Your API (including the server) is already done! <br/>
<img src={server_main5} alt="Version Location" class="myResponsiveImg" width="800px"/>

#### Now your can access your Server. 👏
<img src={server_main6} alt="Version Location" class="myResponsiveImg" width="800px"/>

:::tip
As you know, We made API as <b>8080 port</b> and GET <b>/hello</b> ,<br/>
That's why you can access <b>http://localhost:8080/hello</b> without <b>404 error</b>!
:::


## HTTP Method Examples! 📡

### <a href="/docs/Documentation/Examples/API/GET"> - <span class="method get method-title">GET</span> </a>
### <a href="/docs/Documentation/Examples/API/POST"> - <span class="method post method-title">POST</span></a>
### <a href="/docs/Documentation/Examples/API/DELETE"> - <span class="method delete method-title">DELETE</span></a>
### <a href="/docs/Documentation/Examples/API/PUT"> - <span class="method put method-title">PUT</span></a>

:::tip
You can see how to make each API Method.
:::