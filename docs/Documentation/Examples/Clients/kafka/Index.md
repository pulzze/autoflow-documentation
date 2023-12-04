---
title: Kafka
sidebar_label: Kafka
description: API AutoFlow Kafka Client
image: img/api-autoflow-logo.png
keywords:
  - kafka
  - client
---

import LeftNav from '@site/static/img/example/client/kafka/left-nav.jpg';
import Create from '@site/static/img/example/client/kafka/create.jpg';
import Server from '@site/static/img/example/client/kafka/server.jpg';
import Connection from '@site/static/img/example/client/kafka/connection.jpg';
import Start from '@site/static/img/example/client/kafka/start.jpg';

# Kafka client

## Navigate to Client

<img src={LeftNav} alt="Left Navigation" class="myResponsiveImg" width="900px"/>


## Create a NEW Kafka Client

<img src={Create} alt="Create Kafka" class="myResponsiveImg" width="500px"/>

:::danger CONSUMER GROUP ID
The Kafka client ID needs to be same as the Broker's **CONSUMER GROUP ID**
:::

## Create a New Server

The term "Kafka server" refers to a Kafka broker. A Kafka broker is a part of the Kafka cluster and is responsible for storing and managing Kafka topics. It acts as a server that handles incoming data from producers, stores that data on disk, and serves that data to consumers.


<img src={Server} alt="Kafka Server" class="myResponsiveImg" width="500px"/>

> **Address** `127.0.0.1`  Address of the Kafka Server
>
> **Port** `9092`  Default Kafka port number


## Kafka Broker Info



## Establish a New Connection

<img src={Connection} alt="Kafka Connection" class="myResponsiveImg" width="600px"/>

> **Type** `kafka`  Address of the Kafka Server
> 
> **Fetch API version** `5`  Default Kafka port number
> 
> **TLS**  Cert Key for the connection
> 
>> **client certfile** `cert.pem`  certfile <br/>
>> **keyfile** `key.pem`  Key cert file <br/>
>> **keyfile password** `......`  keyfile password <br/>
>> **cacertfile** `ca-cert.pem`  CA certfile


## Start Kafka Client

:::danger WAIT!
Start after all the configuration is complete.
:::

<img src={Start} alt="Kafka Start" class="myResponsiveImg" width="900px"/>