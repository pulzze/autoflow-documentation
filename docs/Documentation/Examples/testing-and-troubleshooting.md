---
sidebar_position: 1
title: Testing and Troubleshooting
---

import ActionLog from "@site/static/img/example/testing-and-troubleshooting/action-log-light.png"
import LogMenu from "@site/static/img/example/testing-and-troubleshooting/log-menu-light.png"
import ReplayPane from "@site/static/img/example/testing-and-troubleshooting/replay-pane-light.png"
import ServiceOperationDropdown from "@site/static/img/example/testing-and-troubleshooting/service-operation-dropdown-light.png"
import SimulationBar from "@site/static/img/example/testing-and-troubleshooting/simulation-bar-light.png"
import SimulationPaneTransactionsTab from "@site/static/img/example/testing-and-troubleshooting/simulation-pane-transactions-tab-light.png"
import TestPopup from "@site/static/img/example/testing-and-troubleshooting/test-popup-light.png"
import TraceButton from "@site/static/img/example/testing-and-troubleshooting/trace-button-light.png"
import TracePane from "@site/static/img/example/testing-and-troubleshooting/trace-pane-light.png"
import TransactionMenu from "@site/static/img/example/testing-and-troubleshooting/transaction-menu-light.png"
import TransactionsPage from "@site/static/img/example/testing-and-troubleshooting/transactions-page-light.png"

A major advantage of using API AutoFlow is the testing and troubleshooting processes. Some tools available include:

1. <a href="#simulation">Simulation</a>
2. <a href="#tracing">Tracing</a>
3. <a href="#replay">Replay</a>
4. <a href="#transactions">Transactions</a>

## Simulation

Simulation is available for server and service operations. In order to use simulation, the user will need to create test input for the simulation to use. If input data is not required, you may also use the default simulation option.

To use simulation, you can use the data simulation bar above both operations.

<div>
    <img src={SimulationBar} alt="Simulation Bar"/>
</div>

Alternatively, you can access simulation pane by clicking Simulate from the item dropdown.

<div>
    <img src={ServiceOperationDropdown} alt="Service Operation Dropdown"/>
</div>

To create a test, click the add button in either the simulation bar or the simulation pane. A form will appear requiring an ID and any required input for the chosen operation.

<div>
    <img src={TestPopup} alt="Test Popup"/>
</div>

Once the test is created, simulation will begin. You should notice the actions begin to highlight in different colors to indicate that simulation is running. A red highlight means that an error occurred in that action. In order to troubleshoot actions, you can use tracing.

## Tracing

Tracing allows the user to view all the data available for a given action along with the input and output for that action. There are currently 2 ways to access the trace information. One can be found under the Check Output button at the bottom of the action.

<div>
    <img src={ActionLog} alt="Action Log"/>
</div>

The other is the Trace button in the Action's title bar.

<div>
    <img src={TraceButton} alt="Trace Button"/>
</div>

This will open the Trace pane.

<div>
    <img src={TracePane} alt="Trace Pane"/>
</div>

## Replay

While simulation is running, you may notice that another pane will open called the Replay pane. The replay gives an overview of what was performed during an execution. By clicking the links, you will be navigated to the location of that item and open the trace pane to inspect the data. 

<div>
    <img src={ReplayPane} alt="Replay Pane"/>
</div>

This pane is available during simulation but can also be used to inspect cached transactions.

## Transactions

Transactions are recorded when HTTP requests are received and can be found on the settings page and the simulation pane for a given operation.

<div>
    <img src={TransactionsPage} alt="Transactions Page"/>
</div>

<div>
    <img src={SimulationPaneTransactionsTab} alt="Simulation Pane Transactions Tab"/>
</div>

You may create new test data directly from these transactions by choosing Create Test or begin a replay of that transaction by choosing Replay. This makes it simple to walk through exactly what happens when a request was received and even create test simulation based off of it.

<div>
    <img src={TransactionMenu} alt="Transaction Menu"/>
</div>

Additionally, if your solution includes logging or the execution encountered an error, transactions can be accessed directly from the log pane.

<div>
    <img src={LogMenu} alt="Log Menu"/>
</div>

You can navigate directly to the source of the log or begin a transaction replay directly from the log.
