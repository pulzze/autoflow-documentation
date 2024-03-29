---
sidebar_position: 1
title: INPUT Simulation
sidebar_label: 1. INPUT Simulation
description: INPUT simulation is a mock or HTTP server request or Service arguments.
image: img/api-autoflow-logo.png
keywords:
  - data simulation
  - mock data
  - input
  - test data
---

import ActionData from "@site/static/img/guide/data-simulation/action_data.png"
import Trace from "@site/static/img/guide/data-simulation/trace.png"
import ColorIndicationFailure from "@site/static/img/guide/data-simulation/color_indication_failure.png"
import ColorIndicationSuccess from "@site/static/img/guide/data-simulation/color_indication_success.png"
import SimulationSection from "@site/static/img/guide/data-simulation/simulation_section.png"
import SimulationButton from "@site/static/img/guide/data-simulation/simulation_button.png"

# INPUT Simulation

## Overview
<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
            <p>Data simulation is a mock HTTP request data simulated for the purpose of testing a server, service during development. By simulating the data, developers can visualize the expected response as the actions are applied.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=7lwaMfIKzeY"><button class="btnVideo">🎥 Watch Video</button></a>
    </div>
    <div class="colTwoClearer"></div>
</div>

## From Operations

The data can be simulated from both server and service operations.

### Simulation button

The simulation button appears when the three dots at the end of the operation are clicked.

<div class="myResponsiveImg">
    <img src={SimulationButton} alt="Simulation Button" class="myResponsiveImg"/>
</div>

### Simulation section

Once simulated, a simulation section will appear on the right pane.

<div class="myResponsiveImg">
    <img src={SimulationSection} alt="Simulation Section" class="myResponsiveImg"/>
</div>

- Use the thunder icon to run the simulations.
- Use the Add button to create more simulations when multiple mock data are required for testing.

### Color indication

Notice that when the test goes through successfully, the actions and response will turn green. However, when any part of the operation fails, it will indicate in red.

<img src={ColorIndicationSuccess} alt="Color Indication Success" />

<img src={ColorIndicationFailure} alt="Color Indication Failure" />

### Trace

The trace shows the data at a certain state as it passes through the chain of actions.

<div class="myResponsiveImg">
    <img src={Trace} alt="Trace" class="myResponsiveImg"/>
</div>

### Action’s Data

When the trace button is clicked, the trace result appears on the right-bottom pane.

<div class="myResponsiveImg">
    <img src={ActionData} alt="Action's Data" class="myResponsiveImg"/>
</div>

### Result

The resulting data of the action.

### Data

The data that the action has received.
