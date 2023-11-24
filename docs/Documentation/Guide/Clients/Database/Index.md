---
sidebar_position: 1
title: Database
sidebar_label: Database
description: Database client.
image: img/api-autoflow-logo.png
keywords:
  - mariadb
  - mssql
  - oracle
  - postgres
  - client
---

import AddNewVersion from "@site/static/img/guide/Clients/add_new_version.png"
import EnteringConnectionInformation from "@site/static/img/guide/Clients/entering_connection_information.png"
import AddingServer from "@site/static/img/guide/Clients/adding_server.png"
import EnterDatabaseInformation from "@site/static/img/guide/Clients/enter_database_information.png"
import CreatingId from "@site/static/img/guide/Clients/creating_id.png"
import CreatingNewClient from "@site/static/img/guide/Clients/creating_new_client.png"
import ConnectionInfo from "@site/static/img/guide/Clients/connection-info.png"
import ChooseClient from "@site/static/img/guide/Clients/choose_client.png"
import StartConnection from "@site/static/img/guide/Clients/start_connection.png"

# Database Client

Connection to various types of databases.

:::note Basic Databases
- MariaDB (MySQL)
- MS SQL
- Oracle
- Postgres

Contact sales@interactor.com for other databases.

:::

### 1. Create a new Client

<img src={CreatingNewClient} alt="CORS Methods" class="myResponsiveImg" width="600"/>

## 2. Set the connection info
Go to Connection info tab by clicking "Connection", then press edit button to edit the info.

<img src={ConnectionInfo} alt="CORS Methods" class="myResponsiveImg" width="800"/>

Put connection info, and press save button to save the changes.

<img src={EnterDatabaseInformation} alt="CORS Methods" class="myResponsiveImg" width="800"/>

## 3. Add a connection Server

Press the Add Server button

<img src={AddingServer} alt="CORS Methods" class="myResponsiveImg" width="800"/>

### 4. Enter the connection information

<img src={EnteringConnectionInformation} alt="CORS Methods" class="myResponsiveImg" width="500"/>

:::note Default ports
- MariaDB (MySQL) : `3306`
- MS SQL: `1433`
- Oracle `custom`
- Postgres `5432`
:::

### 5. Start the connection

<img src={StartConnection} alt="CORS Methods" class="myResponsiveImg" width="800"/>

### 6. Use Client Connection in action
Now you can use client connection in your action configuration.

<img src={ChooseClient} alt="CORS Methods" class="myResponsiveImg" width="800"/>