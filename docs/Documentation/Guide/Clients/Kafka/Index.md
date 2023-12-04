---
sidebar_position: 8
title: Kafka Client
sidebar_label: Kafka
description: Kafka Client
image: img/api-autoflow-logo.png
keywords:
  - kafka
  - client
---

import Create from '@site/static/img/guide/Clients/kafka/create.jpg';
import Server from '@site/static/img/guide/Clients/kafka/server.jpg';
import Connection from '@site/static/img/guide/Clients/kafka/connection.jpg';
import Event from '@site/static/img/guide/Clients/kafka/event.jpg';
import Info from '@site/static/img/guide/Clients/kafka/info.jpg';
import Start from '@site/static/img/guide/Clients/kafka/start.jpg';

# Kafka Clients

## Using [Kafka](https://kafka.apache.org) Event

You can configure action flow for specific MQTT topic.


Add [action](../../Workflow/Action) in the topic event, then action flow will be started when topic is published.

## Create New Kafka Client

:::danger CONSUMER GROUP ID
The Kafka client ID needs to be same as the Broker's **CONSUMER GROUP ID**
:::

<img src={Create} alt="Create Kafka" class="myResponsiveImg" width="500px"/>


## Server

The term "Kafka server" refers to a Kafka broker. A Kafka broker is a part of the Kafka cluster and is responsible for storing and managing Kafka topics. It acts as a server that handles incoming data from producers, stores that data on disk, and serves that data to consumers.


<img src={Server} alt="Kafka Server" class="myResponsiveImg" width="500px"/>

> **Address** `127.0.0.1`  Address of the Kafka Server
>
> **Port** `9092`  Default Kafka port number


## Connection

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

## Event

An Kafka "event" is to subscribed to.  Once subscribed, the workflow can received data to automate and handle data.

<img src={Event} alt="Kafka Event" class="myResponsiveImg" width="900px"/>


## Info

<img src={Info} alt="Kafka Information" class="myResponsiveImg" width="600px"/>

Title and description of the client

## Start

<img src={Start} alt="Kafka Start" class="myResponsiveImg" width="900px"/>

:::danger TURN ON THE CLIENT
Make sure to turn on the client!!!
:::