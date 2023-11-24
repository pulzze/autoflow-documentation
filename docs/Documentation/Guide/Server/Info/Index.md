---
sidebar_position: 1
title: Server Information
sidebar_label: Info
description: Information about the server
image: img/api-autoflow-logo.png
keywords:
  - server
  - cors
  - tls
hide_table_of_contents: false
---

import Info from "@site/static/img/guide/Server/info/info.jpg"

# Server Information

Information section contains key information about the server.

### 1. Title

Having a title allows other users or even when you come back later to know about the server

### 2. Description

Write a detailed description about the server.

### 3. Port Number

A port is a communication endpoint that identifies a specific process to which a message or data packet is sent. A server port number is a 16-bit unsigned integer, thus ranging from 0 to 65535, that is used to uniquely identify a specific process to which a network message or packet is to be forwarded when it arrives at a server.

There are well-known (reserved) port number such as HTTP (80), SSH (22), MySQL (3306), and SMTP (25).

:::note Check If Port is Available and Open
You can use any port as long as:
1. Not already used
2. Open in your firewall <br />ingress rule (if deployed on cloud)
:::


### 4. CORS

CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that controls how web pages in one domain can request and interact with resources (such as data or APIs) in another domain.

[Learn more about ORS](cors)

### 5. TLS

TLS (Transport Layer Security) is a cryptographic protocol designed to provide secure communication over a computer network.

[Learn more about TLS](tls)



<img src={Info} alt="Server Information Page" class="myResponsiveImg" width="800"/>