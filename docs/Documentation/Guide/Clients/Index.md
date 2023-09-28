---
sidebar_position: 8
---

import AddNewVersion from "@site/static/img/Guide/Clients/add_new_version.png"
import EnteringConnectionInformation from "@site/static/img/Guide/Clients/entering_connection_information.png"
import AddingServer from "@site/static/img/Guide/Clients/adding_server.png"
import EnterDatabaseInformation from "@site/static/img/Guide/Clients/enter_database_information.png"
import CreatingId from "@site/static/img/Guide/Clients/creating_id.png"
import CreatingNewClient from "@site/static/img/Guide/Clients/creating_new_client.png"
import ConnectionInfo from "@site/static/img/Guide/Clients/connection-info.png"
import ChooseClient from "@site/static/img/Guide/Clients/choose_client.png"
import StartConnection from "@site/static/img/Guide/Clients/start_connection.png"

# Clients

## What is a Client?

**Clients** are connectors to the database and other systems. For example, API AutoFlow provides a connector to popular databases such as Maria DB, MS SQL, Oracle, and more.

By configuring the connection with the database credentials and the server information, you can issue any SQL command to work directly with the database.

## Configuring the Client

### Create a new Client

<div class= "myResponsiveImg">
    <img src={CreatingNewClient} alt="Creating New Client"/>
</div>

## Set the connection info
Go to Connection info tab by clicking "Connection", then press edit button to edit the info.
<div class= "myResponsiveImg">
    <img src={ConnectionInfo} alt="Connection Info"/>
</div>
Put connection info, and press save button to save the changes.
<div class= "myResponsiveImg">
    <img src={EnterDatabaseInformation} alt="Enter dabase information"/>
</div>

## Add a connection Server

Press the Add Server button

<div class= "myResponsiveImg">
    <img src={AddingServer} alt="Adding a server"/>
</div>

### Enter the connection information

<div class= "myResponsiveImg">
    <img src={EnteringConnectionInformation} alt="Entering Connection information"/>
</div>

### Start the connection
<div class= "myResponsiveImg">
    <img src={StartConnection} alt="Starting the connection"/>
</div>

### Use Client Connection in action
now you can use client connection in your action configuration.
<div class= "myResponsiveImg">
    <img src={ChooseClient} alt="Choosing a Client"/>
</div>
