---
sidebar_position: 3
collapsed: false
---

import TutorialKeyConcept from '@site/static/img/tutorial-key-concepts.png';
import ApiAutoflow from "@site/static/img/guide/getting-started/ApiAutoflow.png";

# Getting Started
## Key Concepts

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
            <p>Topics covered</p>
                <ul>
                    <li>Define the APIs</li>
                    <li>Create servers to host the APIs</li>
                    <li>All other features in the product are to support the server</li>
                </ul>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/embed/SLPKuXWuo1A?si=K2fYk-kJuZZowi7u&amp;"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>

:::info
 If there’s only one thing that you need to remember,
 **it’s how to create and configure the Server.**
:::

#### Everything in API AutoFlow evolves around the Server.

<!-- <div class="myResponsiveImg">
    <img src={ApiAutoflow} alt="Api Autoflow" class="myResponsiveImg"/>
</div> -->

![API Autoflow Overview](@site/static/img/guide/getting-started/ApiAutoflow.png)

### Server

A server hosts the API and performs a set of operations. A server has a port number and a set of security rules before it performs set of workflows for the application. A server can utilize all the features in the product including database, files, clients, and more

Everything else in the product is there to support the Server.

### Libraries

Let’s look at each feature and how they relate to the server.

#### 1. API

The API defines how API AutoFlow receives and responds to API requests. For instance, you can create a path `/test`, and set it to only receive GET requests. API AutoFlow uses an OpenAPI specification, formerly known as Swagger. This makes it easy for API professionals to quickly define the APIs and share the API documentation with others without needing to do additional work.

#### 2. Services

A service helps the server by taking out commonly used actions into a reusable group.

A service has an INPUT and an OUTPUT similar to functions in a programming language.

A service performs a set of operations with actions in it.

For example, a service to get an email from a GMAIL API can be reused by many server operations.

#### 3. Connections

**Connections** are connectors to a database and other systems. For example, API AutoFlow provides connectors to popular databases such as Maria DB, MS SQL, Oracle, and more.

By configuring the connection with the database credentials and the server information, you can issue any SQL commands to work directly with the database.
